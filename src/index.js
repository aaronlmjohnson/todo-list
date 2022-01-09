import './assets/styles/style.css';
import { projectSidebar } from './todoProjects/projectSidebar';
import { projectLinkHandler } from './todoProjects/projectLinkHandler';
import { newProjectButtonHandler } from './todoProjects/newProjectButtonHandler';
import { newTaskForm } from './newTaskForm/newTaskForm';
import { newTaskFormHandler } from './newTaskForm/newTaskFormHandler';
import { setDefaultValuesForForm } from './newTaskForm/setDefaultValuesForForm';
import { getContentDiv } from './getContentDiv';
import { createNewProject } from './todoProjects/createNewProject';
import { doesProjectExist } from './todoProjects/doesProjectExist';
import { getProject } from './todoProjects/getProject';

const content = getContentDiv();

createNewProject({'title': 'default'});
console.log(doesProjectExist('default'));
content.append(newTaskForm);

setDefaultValuesForForm();
projectLinkHandler();
newProjectButtonHandler();
newTaskFormHandler();











