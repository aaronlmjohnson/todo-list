import { projectSidebarLink } from './projectSidebarLink'

export const addProjectsToSidebar = (()=>{

    const sidebar = document.getElementById('project-sidebar');
    const update = ()=>{
        const projects = [...document.getElementsByClassName('project')];
        projects.forEach((project)=>{
            sidebar.append(projectSidebarLink(project.id).get());
        });
    };
    
    return {
        update
    }

    
});