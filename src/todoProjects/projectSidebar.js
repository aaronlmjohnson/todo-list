import { div } from '../dom/div';
import { header } from '../dom/header';
import { getContentDiv } from '../getContentDiv';
import { newProjectButton } from './newProjectButton';


export const projectSidebar = (()=>{
    const _sideBar = div("project-sidebar", true);
    const _projects = div("project-links", true);
    const _header = header(1, "Projects");
    const content = getContentDiv();
    
    [_header, _projects, newProjectButton].forEach((element)=> _sideBar.append(element));

    content.append(_sideBar);
})();