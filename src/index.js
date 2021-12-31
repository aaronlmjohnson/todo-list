import './assets/styles/style.css';

import { form } from './dom/form';
import { formItem } from './dom/formItem';
import { projectSidebar } from './todoProjects/projectSidebar';
import { projectElement } from './todoProjects/projectElement';
import { addLinkToSideBar } from './todoProjects/addLinkToSideBar';
import { projectLink } from './todoProjects/projectLink';


const content = document.getElementById("content");
const newProjectForm = form('#', '#', 'create-project');
const sidebar = projectSidebar();
const activeProject = projectElement("default", true);
const activeProjectLink = projectLink(activeProject.id);
// need to display a default project on the page. 

// const title = formItem("title", "text", "Title: ");
// newProjectForm.addFormItem(title);

content.append(sidebar);
content.append(activeProject);
addLinkToSideBar(activeProjectLink);
//content.append(newProjectForm.get());





