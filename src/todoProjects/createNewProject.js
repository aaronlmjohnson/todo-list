import { processNewProjectForm } from "./processNewProjectForm";
import { projectElement } from "./projectElement";

export const createNewProject = (e)=>{
    e.preventDefault();
    const _content = document.getElementById("content");
    const _data = processNewProjectForm();
    document.getElementById("new-project-form").remove();

    for(let datum in _data){
        const element = projectElement(_data[datum].toLowerCase(), false);
        _content.append(element);
    }
    //add create new project button back
    document.getElementById("new-project-button").style.display = 'block';
    //remove cancel new project button
    document.getElementById("cancel-project-button").remove();
};