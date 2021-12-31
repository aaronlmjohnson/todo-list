import { div } from '../dom/div';
import { header } from '../dom/header';
import { button } from '../dom/button';


export const projectSidebar = ()=>{
    const _sideBar = div("project-sidebar", true);
    const _projects = div("project-links", true);
    const _header = header(1, "Projects");
    //const _addProjectBtn = button("project-form-button", true, "New Project").get();
    
    [_header, _projects].forEach((element)=> _sideBar.append(element));


    return _sideBar;
};