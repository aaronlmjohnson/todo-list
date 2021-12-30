export const div = (name, unique)=> {
    const _element = document.createElement("div");
    if(unique)
        _element.id = name;
    else
        _element.classList.add(name);

    return _element;
};