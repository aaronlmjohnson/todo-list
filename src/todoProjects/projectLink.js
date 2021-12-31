export const projectLink = (projectName)=>{
    const _element = document.createElement('a');
    _element.href = '#';
    _element.textContent = projectName;
    _element.classList.add("project-link");
    return _element;
}