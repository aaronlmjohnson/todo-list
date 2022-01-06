import { inputValidator } from './inputValidator';

export const input = (name, type, value="")=>{

    if(!inputValidator.isValid(type))
        throw 'invalid form input';
        
    const element = document.createElement("input");
    element.type = type;
    element.name = name;
    element.id = name;
    if(value) element.value = value;

    return element;
};