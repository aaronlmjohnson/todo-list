import { div } from '../dom/div';
import { header } from '../dom/header';
import { button } from '../dom/button';


export const projectSidebar = ()=>{
    const _sideBar = div("project-sidebar", true).get();
    const _projects = div("projects", false).get();
    const _header = header(1, "Projects").get();
    const _addProjectBtn = button("project-form-button", true, "New Project").get();
    
    [_header, _projects, _addProjectBtn].forEach((element)=> _sideBar.appendChild(element));


    const getSideBar = ()=> _sideBar;
    const getProjectsSect = ()=> _projects;
    return {
        getSideBar,
        getProjectsSect
    }
};