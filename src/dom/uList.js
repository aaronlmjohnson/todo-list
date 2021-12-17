export const uList = (name, unique)=>{
    const _uList = document.createElement("ul");

    if(unique)
        _uList.id = name
    else
        _uList.classList.add = name;

    const add = (className, content)=>{
        const li = document.createElement("li");
        li.appendChild(content);
        _uList.appendChild(li);
    };

    const get = ()=> _uList
    return {
        get,
        add
    }
}