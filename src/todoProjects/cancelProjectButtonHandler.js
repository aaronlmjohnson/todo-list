import { addEventListener } from "../dom/addEventListener";
import { closeNewProjectForm } from "./closeNewProjectForm";
export const cancelProjectButtonHandler = ()=>{
    const _button = document.getElementById("cancel-project-button");
    addEventListener(_button, 'click', closeNewProjectForm);
}