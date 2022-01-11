import { div } from './dom';
import { header } from './dom';
import { button } from './dom';

const newProjectButton = (()=>{
    const _element = button("new-project-button", true, "Add Project ＋");
    return _element;
})();

 const projectSidebar = (()=>{
    const _sideBar = div("project-sidebar", true);
    const _projects = div("project-links", true);
    const _header = header(1, "Projects");
    
    [_header, _projects, newProjectButton].forEach((element)=> _sideBar.append(element));

    return _sideBar;
})();

export default projectSidebar;