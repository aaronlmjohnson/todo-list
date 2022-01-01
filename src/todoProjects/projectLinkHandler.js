import { addEventListener } from "../dom/addEventListener";
import { setNewActiveProject } from "./setNewActiveProject";
export const projectLinkHandler = ()=>{
    
    const _getProjectLinks = ()=> 
        [...document.getElementsByClassName('project-link')];

    const _selectProject = (e)=>{
        const newProjectId = e.target.textContent.toLowerCase();
        const currentProject = document.getElementsByClassName("active")[0];
        const newProject = document.getElementById(newProjectId);
        
        setNewActiveProject(currentProject, newProject);
    }

    _getProjectLinks().forEach((link)=>{
        addEventListener(link, 'click', _selectProject)
    });

    
};