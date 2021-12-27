import { div } from '/src/dom/div';

export const projectElement = (name)=>{
    const _element = div("project", false).get();
    const _name = name;

    let _isActive = false;

    const setAsActiveProject = ()=> {
        _isActive = true
        _element.id = "active-project";
    };
    const setAsInactiveProject = ()=>{
        _isActive = false;
        _element.id = "";
    } 
    const get = ()=> _element;

    return {
        setAsActiveProject,
        setAsInactiveProject,
        get
    };

};