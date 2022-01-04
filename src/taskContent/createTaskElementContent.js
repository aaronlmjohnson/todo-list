import { taskItem } from "./taskItem";
import { addTaskItemToElement } from "./addTaskItemToElement";

export const createTaskElementContent = (element, item, type)=>{
    addTaskItemToElement(taskItem(item, type), element);
};