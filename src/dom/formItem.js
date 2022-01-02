import  { input } from './input';
import  { label } from './label';
import { inputWithLabel } from './inputWithLabel';

export const formItem = (name, type, value = "")=>{
    const _input = input(name, type);
    const _label = label(_input, value);

    return inputWithLabel(_input, _label);
}