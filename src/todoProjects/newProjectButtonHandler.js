import { addEventListener } from "../dom/addEventListener";
import { newProjectForm } from "./newProjectForm";
import { newProjectFormHandler } from "./newProjectFormHandler";

export const newProjectButtonHandler = ()=>{
    const _button = document.getElementById("new-project-button");
    const displayNewProjectForm = ()=>{
        const projectLinks = document.getElementById("project-links");
        projectLinks.append(newProjectForm);

        newProjectFormHandler();
    }

    addEventListener(_button, "click", displayNewProjectForm);
};
