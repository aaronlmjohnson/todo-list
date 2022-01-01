import { string } from '../stringMethods/string'
export const projectLink = (projectName)=>{
    const _element = document.createElement('a');
    _element.href = '#';
    _element.textContent = string.titleCase(projectName);
    _element.classList.add("project-link");
    return _element;
}