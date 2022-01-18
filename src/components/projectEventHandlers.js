import { getAddProjectButton } from "./addProjectButton";
import { displayNewProjectForm,getNewProjectForm, hideNewProjectForm} from "./newProjectForm";
import {processNewProjectFormData} from './newProjectForm';
import { createNewProject } from "./project";
import { getProjectLinksElement, selectProject } from "./projectLinks";

const projectEventHandlers = ()=>{
    const addProjectButton = getAddProjectButton();
    const newProjectForm = getNewProjectForm();
    const cancelProjectButton = document.getElementById('cancel-project-button');
    const projectLinks = getProjectLinksElement();

    addProjectButton.addEventListener('click', displayNewProjectForm);
    cancelProjectButton.addEventListener('click', hideNewProjectForm);

    newProjectForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const data = processNewProjectFormData();
        createNewProject(data);
    }); 

    projectLinks.addEventListener('click', (e)=>{
        e.preventDefault();
        selectProject(e);
    });


}

export default projectEventHandlers;