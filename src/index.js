import './assets/styles/style.css';
import { projectSidebar } from './todoProjects/projectSidebar';
import { projectElement } from './todoProjects/projectElement';
import { projectLinkHandler } from './todoProjects/projectLinkHandler';
import { newProjectButtonHandler } from './todoProjects/newProjectButtonHandler';
import { taskElement } from './taskContent/taskElement';
import { newTaskForm } from './newTaskForm/newTaskForm';
import { newTaskFormHandler } from './newTaskForm/newTaskFormHandler';
import { setDefaultValuesForForm } from './newTaskForm/setDefaultValuesForForm';

const content = document.getElementById("content");

content.append(projectSidebar);

const activeProject = projectElement("default", true);

content.append(activeProject);
activeProject.append(newTaskForm);

/*
    We can now create task elements manually. We should now attempt to create a form where we can input data that corresponds
    to the task elements. On submit, the form will post the task element within the current active project
 */

setDefaultValuesForForm();
projectLinkHandler();
newProjectButtonHandler();
newTaskFormHandler();











