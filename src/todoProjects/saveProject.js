import { addToStorage } from "../localStorage/addToStorage"

export const saveProject = (data) =>{
    let projectData = localStorage.getItem(data['title']);
    projectData = projectData ? JSON.parse(projectData) : data; // check to see if project exists in storage
    // I need to find a way to be able to update this on new task creation 
    if(!projectData['tasks']) projectData['tasks']= [];
    addToStorage(projectData['title'],JSON.stringify(projectData));
}