import { addToStorage } from "../localStorage/addToStorage";
import { projectElement } from "./projectElement";
import { setNewProjectAsActive } from "./setNewProjectAsActive";

export const createNewProject = (data)=>{
    const _content = document.getElementById("content");
    const element = projectElement(data['title'], false);

    setNewProjectAsActive(element);
    _content.append(element);

    
    // //add create new project button back
    // document.getElementById("new-project-button").style.display = 'block';
    // //remove cancel new project button
    // document.getElementById("cancel-project-button").remove();

   
};