import './assets/styles/style.css';
import { projectSidebar } from './todoProjects/projectSidebar';
import { projectElement } from './todoProjects/projectElement';
import { projectLinkHandler } from './todoProjects/projectLinkHandler';
import { newProjectButtonHandler } from './todoProjects/newProjectButtonHandler';
import { newProjectForm } from './todoProjects/newProjectForm';

const content = document.getElementById("content");
content.append(projectSidebar);

const activeProject = projectElement("default", true);


content.append(activeProject);


projectLinkHandler();
newProjectButtonHandler();

//content.append(newProjectForm.get());

/*
    We can create new projects and add them to the side bar, but clicking on the link doesn't select it.
    We still need to set it to the default project as well after creation. 
*/





