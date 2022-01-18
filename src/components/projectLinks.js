import { getActiveProject, setNewActiveProject, getProjectElement } from './project';
import { string } from './string';


const projectLink = (projectName)=>{
    const _element = document.createElement('a');
    _element.href = '#';
    _element.textContent = string.titleCase(projectName);
    _element.classList.add("project-link");
    return _element;
}

export const addLinkToSideBar = (link)=>{
    const projectLinks = document.getElementById('project-links');

    const lastElement = projectLinks.childNodes.length - 1;
    projectLinks.append(link);
    projectLinks.insertBefore(link, projectLinks.childNodes[lastElement]); // insert links before hidden new project form
}

export const getProjectLinksElement = ()=> document.getElementById('project-links');


export const selectProject = (e) =>{
    if(!e.target.classList.contains('project-link')) return;
    const newProject = getProjectElement(string.kebabCase(e.target.textContent));

    if(newProject == getActiveProject())
        return;
        
    console.log(getActiveProject());
    setNewActiveProject(newProject, getActiveProject());
}

export default projectLink;