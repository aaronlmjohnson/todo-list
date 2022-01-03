import { setNewActiveProject } from "./setNewActiveProject";

export const setNewProjectAsActive = (newProject)=>{
    const _currentProject = document.getElementsByClassName('active')[0];   
    setNewActiveProject(_currentProject, newProject);
};