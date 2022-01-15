import { getAddProjectButton } from "./addProjectButton";
import { displayNewProjectForm,
     getNewProjectForm,
    processNewProjectFormData} from "./newProjectForm";
import project, { projectElement } from "./project";


const projectEventHandlers = ()=>{
    const addProjectButton = getAddProjectButton();
    const newProjectForm = getNewProjectForm();

    addProjectButton.addEventListener('click', displayNewProjectForm);
    newProjectForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        const data = processNewProjectFormData();
        projectElement(project(data));
    });
}

export default projectEventHandlers;