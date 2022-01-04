import { paragraph } from "../dom/paragraph";

export const taskItem = (content, type)=>{
    return paragraph(type, false, content);
}