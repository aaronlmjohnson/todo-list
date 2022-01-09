import { closeNewProjectForm } from "./closeNewProjectForm";
import { createNewProject } from "./createNewProject";
import { getNewProjectForm } from './getNewProjectForm';
import { processNewProjectForm } from './processNewProjectForm';

export const newProjectFormHandler = ()=>{
    const _form = getNewProjectForm();

    const handler = (e)=>{
        e.preventDefault();
        const data = processNewProjectForm();

        createNewProject(data);
        closeNewProjectForm();
        
       removeFormEventListeners();
    };

    const cancelButtonHandler = (e)=>{
        if(e.target != document.getElementById('cancel-project-button')) return;
        closeNewProjectForm();
        
        removeFormEventListeners();
    }

    const removeFormEventListeners = ()=>{
        _form.removeEventListener('submit', handler);
        _form.removeEventListener('click', cancelButtonHandler);
    }

    _form.addEventListener("submit", handler);
    _form.addEventListener('click', cancelButtonHandler);
    


};