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
import { div } from './components/dom';
import { form } from './components/dom';
import { header } from './components/dom';


const content = document.getElementById('content');
const project1 = div('project', false);
const newForm = form('#', '#', 'test');
newForm.addInput('username', 'text', 'name');

content.append(project1);
project1.append(newForm.get());
project1.append(header(1, 'hi', 'title', true));


 












