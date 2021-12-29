import { div } from '/src/dom/div';

export const projectElement = (name,  defaultProject = false)=>{
    const _element = div("project", false).get();
    _element.id = name;
    if(defaultProject) _element.classList.add("active-project");

    const get = ()=> _element;

    return {
        get
    };

};