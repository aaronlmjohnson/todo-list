import { addEventListener } from "../dom/addEventListener";
import { newProjectForm } from "./newProjectForm";

export const newProjectButtonHandler = ()=>{
    const _button = document.getElementById("new-project-button");
    const displayNewProjectForm = ()=>{
        const projectLinks = document.getElementById("project-links");
        projectLinks.append(newProjectForm);
    }

    addEventListener(_button, "click", displayNewProjectForm);
};
