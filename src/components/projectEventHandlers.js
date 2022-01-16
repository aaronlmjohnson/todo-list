import { getAddProjectButton } from "./addProjectButton";
import { displayNewProjectForm,
     getNewProjectForm,
    processNewProjectFormData} from "./newProjectForm";
import { createNewProject } from "./project";


const projectEventHandlers = ()=>{
    const addProjectButton = getAddProjectButton();
    const newProjectForm = getNewProjectForm();

    addProjectButton.addEventListener('click', displayNewProjectForm);
    newProjectForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const data = processNewProjectFormData();
        createNewProject(data);
    });
}

export default projectEventHandlers;