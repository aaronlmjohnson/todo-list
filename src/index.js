import './assets/styles/style.css';
import { projectSidebar } from './todoProjects/projectSidebar';
import { projectElement } from './todoProjects/projectElement';
import { projectLinkHandler } from './todoProjects/projectLinkHandler';
import { newProjectButtonHandler } from './todoProjects/newProjectButtonHandler';
import { newTaskForm } from './newTaskForm/newTaskForm';
import { newTaskFormHandler } from './newTaskForm/newTaskFormHandler';
import { setDefaultValuesForForm } from './newTaskForm/setDefaultValuesForForm';

const content = document.getElementById("content");
content.append(projectSidebar);

const activeProject = projectElement("default", true);

content.append(activeProject);
content.append(newTaskForm);

setDefaultValuesForForm();
projectLinkHandler();
newProjectButtonHandler();
newTaskFormHandler();











