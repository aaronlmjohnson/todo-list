import { getNewTaskFormData } from "./getNewTaskFormData";
import { taskElement } from "../taskContent/taskElement";
import { getActiveProject } from '../todoProjects/getActiveProject';

export const createTaskElement = (e)=>{
    e.preventDefault();
    const activeProject = getActiveProject();
    const task = taskElement(getNewTaskFormData());
    activeProject.append(task);
}