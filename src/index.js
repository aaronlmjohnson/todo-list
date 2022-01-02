import './assets/styles/style.css';
import { projectSidebar } from './todoProjects/projectSidebar';
import { projectElement } from './todoProjects/projectElement';
import { projectLinkHandler } from './todoProjects/projectLinkHandler';
import { newProjectButtonHandler } from './todoProjects/newProjectButtonHandler';
import { newProjectForm } from './todoProjects/newProjectForm';

const content = document.getElementById("content");
content.append(projectSidebar);

const activeProject = projectElement("default", true);
const choresProject = projectElement("chores", false);

content.append(activeProject);
content.append(choresProject);

projectLinkHandler();
newProjectButtonHandler();





