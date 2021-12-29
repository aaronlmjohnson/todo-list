export const projectSidebarLink = (projectName)=>{
    const _element = document.createElement('a');
    _element.href = '#';
    _element.textContent = projectName;
    _element.classList.add("project-link");
    const get = ()=> _element;

    return { get };
}