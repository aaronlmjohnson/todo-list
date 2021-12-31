import { div } from '../dom/div';
import { header } from '../dom/header';
import { string } from '../stringMethods/string';

export const projectElement = (name,  defaultProject = false)=>{
    const _element = div("project", false);
    const _header = header(1, string.titleCase(name), 'project-header');
    _element.id = name;

    if(defaultProject) _element.classList.add("active");

    _element.append(_header);

    return _element;

};