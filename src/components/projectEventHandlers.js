import { getAddProjectButton } from "./addProjectButton";
import { displayNewProjectForm } from "./newProjectForm";

const projectEventHandlers = ()=>{
    const addProjectButton = getAddProjectButton();

    addProjectButton.addEventListener('click', displayNewProjectForm);
}

export default projectEventHandlers;