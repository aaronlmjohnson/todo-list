import './assets/styles/style.css';
import { projectSidebar } from './todoProjects/projectSidebar';
import { projectLinkHandler } from './todoProjects/projectLinkHandler';
import { newProjectButtonHandler } from './todoProjects/newProjectButtonHandler';
import { newTaskForm } from './newTaskForm/newTaskForm';
import { newTaskFormHandler } from './newTaskForm/newTaskFormHandler';
import { setDefaultValuesForForm } from './newTaskForm/setDefaultValuesForForm';
import { getContentDiv } from './getContentDiv';
import { createNewProject } from './todoProjects/createNewProject';

const content = getContentDiv();

createNewProject({'title': 'default'});

content.append(newTaskForm);

setDefaultValuesForForm();
projectLinkHandler();
newProjectButtonHandler();
newTaskFormHandler();











