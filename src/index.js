import './assets/styles/style.css';
import { projectSidebar } from './todoProjects/projectSidebar';
import { projectElement } from './todoProjects/projectElement';
import { projectLinkHandler } from './todoProjects/projectLinkHandler';
import { newProjectButtonHandler } from './todoProjects/newProjectButtonHandler';

const content = document.getElementById("content");
content.append(projectSidebar);

const activeProject = projectElement("default", true);

content.append(activeProject);


projectLinkHandler();
newProjectButtonHandler();







