import { projectSidebarLink } from './projectSidebarLink'

export const addProjectsToSidebar = (()=>{

    const sidebar = document.getElementsByClassName('projects')[0];
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