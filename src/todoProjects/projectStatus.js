
export const projectStatus = (projectElement) => {
    const isProjectActive = ()=>{
        return projectElement.classList.contains('active-project');
    };

    const setAsActiveProject = ()=> {
        projectElement.classList.add("active-project");
        projectElement.style.display = "block";
    };
    const setAsInactiveProject = ()=>{
        projectElement.classList.remove("active-project");
        projectElement.style.display = "none";
    } 

    return {
        setAsActiveProject,
        setAsInactiveProject,
        isProjectActive
    }
}