import { div } from '/src/dom/div';

export const projectElement = (name)=>{
    const _element = div("project", false).get();
    _element.id = name;
    
    let _isActive = false;

    const setAsActiveProject = ()=> {
        _isActive = true
        _element.classList.add("active-project");
    };
    const setAsInactiveProject = ()=>{
        _isActive = false;
        _element.classList.remove("active-project");
    } 
    const get = ()=> _element;

    return {
        setAsActiveProject,
        setAsInactiveProject,
        get
    };

};