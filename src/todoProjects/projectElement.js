import { div } from '../dom/div';
import { header } from '../dom/header';
import { string } from '../stringMethods/string';
import { projectLink } from './projectLink';
import { addLinkToSideBar } from './addLinkToSideBar';
import { addTaskButton } from '../newTaskForm/addTaskButton';
import { toClassIdName } from '../stringMethods/toClassIdName';

export const projectElement = (name,  defaultProject = false)=>{
    const _element = div("project", false);
    const _header = header(1, string.titleCase(name), 'project-header');
    const _addTaskButton = addTaskButton();
    
    addLinkToSideBar(projectLink(name));
    _element.id = toClassIdName(name);

    if(defaultProject) _element.classList.add("active");
    else _element.classList.add("inactive");

    _element.append(_header);
    _element.append(_addTaskButton);

    return _element;

};