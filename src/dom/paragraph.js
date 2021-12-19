export const paragraph = (name, unique, text)=>{
    const _paragraph = document.createElement("p");
    if(unique)
        _paragraph.id = name;
    else
        _paragraph.classList.add(name);

    _paragraph.textContent = text;

    const get = ()=> _paragraph;
    
    return {
        get
    };
};