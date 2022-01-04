import './assets/styles/style.css';
import { projectSidebar } from './todoProjects/projectSidebar';
import { projectElement } from './todoProjects/projectElement';
import { projectLinkHandler } from './todoProjects/projectLinkHandler';
import { newProjectButtonHandler } from './todoProjects/newProjectButtonHandler';
import { taskElement } from './taskContent/taskElement';

const content = document.getElementById("content");

content.append(projectSidebar);

const activeProject = projectElement("default", true);

content.append(activeProject);

const task = taskElement("Cake", "Eat Cake", "1/12/22", 60);

console.log(task);

/* Now that we can make projects and work with them in several ways, its time we add tasks.
    A task element is composed of task content which is made out of several task items like title, description, date, and priority
    start with a task item and then start adding it to the task element
*/
projectLinkHandler();
newProjectButtonHandler();







