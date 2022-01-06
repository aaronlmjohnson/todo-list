import  { input } from './input';
import  { label } from './label';
import { inputWithLabel } from './inputWithLabel';

export const formItem = (name, type, value = "")=>{
    //ternary expressions to add text inside buttons
    const _input = input(name, type, type == "button" ? value : "");
    const _label = label(_input, type != "button" ? value : "");

    return inputWithLabel(_input, _label);
}