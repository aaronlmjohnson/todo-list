import { loadFromStorage } from "../localStorage/loadFromStorage";
import { displayLoadedProject } from "./displayLoadedProject";

export const loadProjectsFromStorage = () =>{
    const projects = {...localStorage};
    
    for(let project in projects) {
       displayLoadedProject(projects[project]);
       
    }
};