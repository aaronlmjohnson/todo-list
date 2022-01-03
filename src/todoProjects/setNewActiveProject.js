export const setNewActiveProject = (currentProject, newProject)=>{
    if(currentProject == newProject) return;
    currentProject.classList.remove("active");
    newProject.classList.remove("inactive");

    currentProject.classList.add("inactive");
    newProject.classList.add("active");
};