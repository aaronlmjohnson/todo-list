import { div } from '../dom/div';
import { header } from '../dom/header';

export const projectSidebar = ()=>{
    const _sideBar = div("project-sidebar", true).get();
    const _projects = document.getElementsByClassName("project");
    const _header = header(1, "Projects");
    _sideBar.appendChild(_header.get());
    
    const get = ()=> _sideBar;

    return {
        get
    }
};