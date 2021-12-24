import { dateHandler } from "./dateHandler";
import { priorityHandler } from "./priorityHandler";

export const taskData = (formData)=>{
    const _createKeyName = (idName)=> idName.split('-')[1];
    
    const _setAttributes = ()=>{
        const obj = {};
        for(let key in formData){
            if(key == "task-date")
                obj[_createKeyName(key)] = dateHandler(formData[key]);
            else if(key == "task-priority")
            obj[_createKeyName(key)] = priorityHandler(formData[key]);
            else
            obj[_createKeyName(key)] = formData[key];
        }
            
        return obj;
    }
    
    const _todoCardContent = _setAttributes();
    const get = ()=> _todoCardContent;

    return {
        get
    };
};