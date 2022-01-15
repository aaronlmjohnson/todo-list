// import { addToStorage } from "../localStorage/addToStorage";
// import { doesProjectExist } from "./doesProjectExist";
// import { projectElement } from "./projectElement";
// import { saveProject } from "../todoProjects/saveProject";
// import { setNewProjectAsActive } from "../todoProjects/setNewProjectAsActive";

export const createNewProject = (data)=>{
    //add more here to prevent project duplicates
    if(doesProjectExist(data['title'])) return;

    const _content = document.getElementById("content");
    saveProject(data);
    const element = projectElement(data['title'], false);

    setNewProjectAsActive(element);
    _content.append(element);
};