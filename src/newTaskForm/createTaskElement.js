import { getNewTaskFormData } from "./getNewTaskFormData";
import { taskElement } from "../taskContent/taskElement";
import { getActiveProject } from '../todoProjects/getActiveProject';
import { closeNewTaskForm } from "./closeNewTaskForm";
import { saveTask } from "../taskContent/saveTask";

export const createTaskElement = (e)=>{
    e.preventDefault();
    const activeProject = getActiveProject();
    const data = getNewTaskFormData();
    saveTask(data, activeProject);
    const task = taskElement(data);
    activeProject.append(task);
    closeNewTaskForm();

}