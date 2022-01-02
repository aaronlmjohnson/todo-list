import { addEventListener } from "../dom/addEventListener"
import { createNewProject } from "./createNewProject";

export const newProjectFormHandler = ()=>{
    const _form = document.getElementById("new-project-form");
    

    addEventListener(_form, "submit", createNewProject);
};