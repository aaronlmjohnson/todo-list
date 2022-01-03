import { addEventListener } from "../dom/addEventListener";
import { newProjectForm } from "./newProjectForm";
import { newProjectFormHandler } from "./newProjectFormHandler";
import { cancelProjectButton } from "./cancelProjectButton";
import { cancelProjectButtonHandler } from "./cancelProjectButtonHandler";

export const newProjectButtonHandler = ()=>{
    const _button = document.getElementById("new-project-button");
    const displayNewProjectForm = ()=>{
        const projectLinks = document.getElementById("project-links");
        projectLinks.append(newProjectForm);
        //hide button while form is open
        _button.style.display = "none";
        //add cancel button;
        projectLinks.append(cancelProjectButton());
        //handlers for making the form and closing it
        newProjectFormHandler();
        cancelProjectButtonHandler();
    }

    addEventListener(_button, "click", displayNewProjectForm);
};
