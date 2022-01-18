import { div, header } from './dom';
import addTaskButton from './addTaskButton';
import projectLink, { addLinkToSideBar } from './projectLinks';
import { string } from './string';
import projects from './projects';
import { hideNewProjectForm } from './newProjectForm';

const project = (data) =>{
    let _title = data['title'];
    const _tasks = [];
    
    const title = ()=> _title;
    const addTask = (task) => _tasks.push(task);

    return {
        title,
        addTask
    }
}

export const projectElement = (project,  defaultProject = false)=>{
    const _element = div("project", false);
    const _header = header(1, string.titleCase(project.title()), 'project-header');
    const _addTaskButton = addTaskButton();
    
    addLinkToSideBar(projectLink(project.title()));
    _element.id = string.kebabCase(project.title());

    if(defaultProject) _element.classList.add("active");
    else _element.classList.add("inactive");

    _element.append(_header);
    _element.append(_addTaskButton);

    return _element;

};

export const getProjectElement = (projectId) => {
    return document.getElementById(projectId);
}

export const setNewActiveProject = (newProject, activeProject) =>{
    if(!activeProject){
        newProject.classList.add('active');
        return;
    }
    
    newProject.classList.remove('inactive');
    activeProject.classList.remove('active');
    
    newProject.classList.add('active');
    activeProject.classList.add('inactive');
}

export const getActiveProject = ()=> document.getElementsByClassName('active')[0];

export const createNewProject = (data, defaultProject = false) =>{
    hideNewProjectForm();
    const newProject = project(data);
    const content = document.getElementById('content');
    
    const newProjectElement = projectElement(newProject, defaultProject);

    projects.add(newProject);
    setNewActiveProject(newProjectElement, getActiveProject());
    content.append(newProjectElement);
}

export default project;