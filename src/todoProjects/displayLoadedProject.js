import { taskElement } from "../taskContent/taskElement";
import { createNewProject } from "./createNewProject";
import { getProject } from "./getProject";

export const displayLoadedProject = (projectDataStr)=>{
    const parsedProject = JSON.parse(projectDataStr);
    console.log(parsedProject);
    createNewProject({'title':parsedProject['title']});
    parsedProject['tasks'].forEach((taskData)=>{
        let task = taskElement(taskData);
        const project = getProject(parsedProject['title']);
        console.log(project);
        project.append(task);
    });
};