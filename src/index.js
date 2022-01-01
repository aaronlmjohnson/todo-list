import './assets/styles/style.css';


import { projectSidebar } from './todoProjects/projectSidebar';
import { projectElement } from './todoProjects/projectElement';
import { projectLinkHandler } from './todoProjects/projectLinkHandler';

import { newProjectButtonHandler } from './todoProjects/newProjectButtonHandler';

const content = document.getElementById("content");

content.append(projectSidebar);
const activeProject = projectElement("default", true);
const choresProject = projectElement("chores", false);

content.append(activeProject);
content.append(choresProject);

projectLinkHandler();
newProjectButtonHandler();

//content.append(newProjectForm.get());

/*
    We're capable of switching between multiple projects now. 

    So the next step should be to try to add more projects

    We can make buttons so we should try to make a button specifically for making projects.

    That button can have a handler that opens a new form

    that can take care of making a new project by taking in a title.

     On submit it will create a new project. 
*/





