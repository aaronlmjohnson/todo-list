import './assets/styles/style.css';

import { form } from './dom/form';
import { formItem } from './dom/formItem';
import { projectSidebar } from './todoProjects/projectSidebar';
import { projectElement } from './todoProjects/projectElement';
import { projectLinkHandler } from './todoProjects/projectLinkHandler';

const content = document.getElementById("content");
const newProjectForm = form('#', '#', 'create-project');
const sidebar = projectSidebar();
content.append(sidebar);
const activeProject = projectElement("default", true);

const choresProject = projectElement("chores", false);


// const title = formItem("title", "text", "Title: ");
// newProjectForm.addFormItem(title);


content.append(activeProject);
content.append(choresProject);

projectLinkHandler();

//content.append(newProjectForm.get());

/* we have two projects, the default and an extra project(chores). Now we need to add create an eventHandler function
    so we can change the inactive project to the active project by clicking on the associated link.
*/





