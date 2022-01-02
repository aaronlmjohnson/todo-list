import { processNewProjectForm } from "./processNewProjectForm";
import { projectElement } from "./projectElement";

export const createNewProject = (e)=>{
    e.preventDefault();
    
    const _data = processNewProjectForm();
    document.getElementById("new-project-form").remove();
    console.log(_data);
    for(let datum in _data){
        projectElement(_data[datum], false);
    }
};