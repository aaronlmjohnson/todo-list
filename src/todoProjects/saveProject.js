import { addToStorage } from "../localStorage/addToStorage"

export const saveProject = (data) =>{
    if(!data['tasks']) data['tasks']= [];
    addToStorage(data['title'],JSON.stringify(data));
}