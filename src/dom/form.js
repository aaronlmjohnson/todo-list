export const form = ((action = "#", method = "#", name = "form")=>{ 
    const _element = document.createElement("form");
    _element.action = action;
    _element.method = method;
    _element.id = name;

    _element.appendChild(_inputList.get());

    return _element;
});

