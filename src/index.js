// import './assets/styles/style.css';
// import { projectSidebar } from './todoProjects/projectSidebar';
// import { projectLinkHandler } from './todoProjects/projectLinkHandler';
// import { newProjectButtonHandler } from './todoProjects/newProjectButtonHandler';
// import { newTaskForm } from './newTaskForm/newTaskForm';
// import { newTaskFormHandler } from './newTaskForm/newTaskFormHandler';
// import { setDefaultValuesForForm } from './newTaskForm/setDefaultValuesForForm';
// import { getContentDiv } from './getContentDiv';
// import { createNewProject } from './todoProjects/createNewProject';
// import { doesProjectExist } from './todoProjects/doesProjectExist';
// import { getProject } from './todoProjects/getProject';
// import { loadProjectsFromStorage } from './todoProjects/loadProjectsFromStorage';

// const content = getContentDiv();


//     createNewProject({'title': 'default'});
//     //loadProjectsFromStorage();
    
//     /* We can save projects and tasks to local storage but there is an issue with overwriting the current local storage content */
// content.append(newTaskForm);

// setDefaultValuesForForm();
// projectLinkHandler();
// newProjectButtonHandler();
// newTaskFormHandler();
import { dom } from './dom';

const content = document.getElementById('content');
const project1 = dom.div('project', false);
const form = dom.form('#', '#', 'test');
form.addInput('username', 'text', 'name');
form.addInput('add-image', 'image', 'Add Image:')
content.append(project1);
project1.append(form.get());
project1.append(dom.header(1, 'hi', 'title', true));


 












