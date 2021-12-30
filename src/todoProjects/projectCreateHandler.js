import { projectCreateForm } from "./projectCreateForm";
import { projectSidebarLink } from "./projectSidebarLink";

export const projectCreateHandler = (()=>{

    const _projectFormButton = document.getElementById("project-form-button");
    

    const displayProjectCreateForm = (e)=>{
        const projectsSection = document.getElementsByClassName("projects")[0];
        const _form = projectCreateForm();
        _projectFormButton.style.display = "none";

        projectsSection.appendChild(_form.get());

        const _projectCreateForm = document.getElementById("project-create");

        //display new project link
        _projectCreateForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            
            projectsSection.appendChild(projectSidebarLink("cake").get());
            _projectFormButton.style.display = "block";
            _projectCreateForm.remove();
        });
    }


    //brings up project creation form on click
    _projectFormButton.addEventListener('click', displayProjectCreateForm);
    
});