import { projectStatus } from './projectStatus';
export const projectLinkHandler = (()=>{

    //for clicking and setting projects as the current active project
    document.addEventListener('click', (e)=>{
        const projectLinks = [...document.getElementsByClassName("project-link")];
        projectLinks.forEach((link)=>{

            if(e.target == link) {
                const prevActiveElement = document.getElementsByClassName("active-project");
                const projectElement = document.getElementById(link.textContent);
                const activityStatus = projectStatus(projectElement);

                if(!activityStatus.isProjectActive()){
                    projectStatus(prevActiveElement).setAsInactiveProject();
                    activityStatus.setAsInactiveProject();
                }
            }
                
        })
    });
    
     
})();