import { getNewProjectForm } from "./getNewProjectForm";

export const removeNewProjectForm = ()=>{
    const form = getNewProjectForm();
    form.reset();
    form.remove();
    //add create new project button back
    document.getElementById("new-project-button").style.display = 'block';
    //remove cancel new project button
    document.getElementById("cancel-project-button").remove();
}