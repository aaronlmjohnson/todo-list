import { div } from '../dom/div';
import { createTaskElementContent } from './createTaskElementContent';

export const taskElement = (title, description, date, priority)=>{
    const  _element = div("task", false);
    const types = ["title", "description","date","priority"];
    
    [title, description, date, priority].forEach((item, i)=> {
        createTaskElementContent(_element, item, types[i]);
    });
    

    return _element;
}