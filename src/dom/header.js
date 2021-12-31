export const header = (level, value, ...[name, unique])=>{
    if(level < 1 || level > 6) throw 'invalid header level.';
    
    const _element = document.createElement(`h${level}`);
    _element.textContent = value;

    if(unique && name) _element.id = name;
    else if(name) _element.classList.add(name);

    
    return _element;
}