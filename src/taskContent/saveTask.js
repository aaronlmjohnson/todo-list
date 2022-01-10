import { loadFromStorage } from "../localStorage/loadFromStorage";
import { saveProject } from "../todoProjects/saveProject";

export const saveTask = (data, project)=>{
    
    const projectStorageData = JSON.parse(loadFromStorage(project.id)); 
    projectStorageData['tasks'].push(data);
    saveProject(projectStorageData);
};