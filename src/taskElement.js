import { div } from './dom/div';
import { uList } from './dom/uList';
import { taskContent } from './taskContent'

export const taskElement = (taskData)=>{
    const content = document.getElementById("content");
    
    const _create = ()=>{
        const task = div("task", false).get();
        const taskElementsArr = taskContent(taskData).get();
        const taskElementsList = uList("task-elements", true);

        taskElementsArr.forEach((element)=>{
            taskElementsList.add("task-item", element);
        });
       
        task.appendChild(taskElementsList.get());
        return task;
    }

    const _task = _create();

    const get = ()=> _task;

    return {
        get
    };
}