export const div = (name, unique)=>{
    
    const _div = document.createElement("div");

    if(unique)
        _div.id = name;
    else
        _div.classList.add(name);

    const get = ()=> _div
    return {
        get
    };
}