export const button = (name, unique, value)=> {
    const _element = document.createElement("button");
    _element.type = 'button';
    _element.textContent = value;
    if(unique)
        _element.id = name;
    else
        _element.classList.add(name);

    const get = ()=> _element;
    
    return {
        get
    };
};