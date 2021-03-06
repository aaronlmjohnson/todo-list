import { addEventListener } from "../dom/addEventListener";
import { setNewActiveProject } from "./setNewActiveProject";
import { toClassIdName } from "../stringMethods/toClassIdName";
export const projectLinkHandler = ()=>{

    window.onload = ()=>{
    const _selectProject = (e)=>{
        if(!e.target.classList.contains('project-link')) return;

        const newProjectId = toClassIdName(e.target.textContent.toLowerCase());

        const currentProject = document.getElementsByClassName("active")[0];
        const newProject = document.getElementById(newProjectId);
        
        setNewActiveProject(currentProject, newProject);
    }

        addEventListener(window, 'click', _selectProject);

    }
};