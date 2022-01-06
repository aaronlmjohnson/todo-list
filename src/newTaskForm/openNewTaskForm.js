import { getActiveProject } from "../todoProjects/getActiveProject";
import { getAddTaskButton } from "./getAddTaskButton";

export const openNewTaskForm = (e)=>{
    const activeProject = getActiveProject();
    if(e.target != getAddTaskButton(activeProject)) return;

    const form = document.getElementById("new-task-form");
   
    form.style.display = "block";
}