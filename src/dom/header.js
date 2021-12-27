export const header = (level, value)=>{
    if(level < 1 || level > 6) throw 'invalid header level.';
    const _element = document.createElement(`h${level}`);
    _element.textContent = value;
    const get = ()=> _element

    return {
        get
    }
}