export const paragraph = (name, unique, text)=>{
    const _element = document.createElement("p");

    if(unique)
        _element.id = name;
    else
        _element.classList.add(name);

    _element.textContent = text;   
    return _element;
};