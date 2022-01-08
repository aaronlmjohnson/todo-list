import { addToStorage } from "../localStorage/addToStorage"
import { camelCase } from "../string/camelCase"

export const saveProject = (data) =>{
    addToStorage('projects',JSON.stringify(data));
}