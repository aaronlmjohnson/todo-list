import { div } from '../dom/div';
import { createTaskElementContent } from './createTaskElementContent';

export const taskElement = (taskData)=>{
    const  _element = div("task", false);
    const types = ["title", "description","date","priority"];

    for(const datum in taskData){
        createTaskElementContent(_element, taskData[datum], datum);
    }
    
    // [title, description, date, priority].forEach((item, i)=> {
    //     createTaskElementContent(_element, item, types[i]);
    // });
    

    return _element;
}