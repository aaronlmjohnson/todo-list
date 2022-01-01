import { div } from '../dom/div';
import { header } from '../dom/header';
import { string } from '../stringMethods/string';
import { projectLink } from './projectLink';
import { addLinkToSideBar } from './addLinkToSideBar';

export const projectElement = (name,  defaultProject = false)=>{
    const _element = div("project", false);
    const _header = header(1, string.titleCase(name), 'project-header');
    _element.id = name;
    addLinkToSideBar(projectLink(_element.id));

    if(defaultProject) _element.classList.add("active");
    else _element.classList.add("inactive");

    _element.append(_header);

    return _element;

};