import { string } from './string'

const projectLink = (projectName)=>{
    const _element = document.createElement('a');
    _element.href = '#';
    _element.textContent = string.titleCase(projectName);
    _element.classList.add("project-link");
    return _element;
}

export const addLinkToSideBar = (link)=>{
    const projectLinks = document.getElementById('project-links');

    const lastElement = projectLinks.childNodes.length - 1;
    projectLinks.append(link);
    projectLinks.insertBefore(link, projectLinks.childNodes[lastElement]); // insert links before hidden new project form


}

export default projectLink;