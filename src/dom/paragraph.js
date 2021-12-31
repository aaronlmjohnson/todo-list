export const paragraph = (name, unique, text)=>{
    const _element = document.createElement("p");

    if(unique)
        _element.id = name;

    _paragraph.textContent = text;   
};