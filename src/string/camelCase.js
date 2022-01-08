import { string } from "./string";

export const camelCase = (str) =>{
    return str.split('-').map((word, i)=>{
        return i < 1 ? word : string.titleCase(word);
    }).join('');
}