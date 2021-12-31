import './assets/styles/style.css';

import { form } from './dom/form';
import { formItem } from './dom/formItem';
import { projectSidebar } from './todoProjects/projectSidebar';
import { projectElement } from './todoProjects/projectElement';


const content = document.getElementById("content");
const newProjectForm = form('#', '#', 'create-project');
const sidebar = projectSidebar();
const displayedProject = projectElement("default", true);
// need to display a default project on the page. 

const title = formItem("title", "text", "Title: ");

newProjectForm.addFormItem(title);

content.append(sidebar);
content.append(displayedProject);
//content.append(newProjectForm.get());





