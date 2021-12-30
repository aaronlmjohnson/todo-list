export const label = (inputElement, value ="")=>{
    const _element = document.createElement("label");
    _element.htmlFor = inputElement.name;
    _element.textContent = value;
    return _element
}