import { uList } from "./uList";

export const form = ((action = "#", method = "#", name = "form")=>{ 
    const _element = document.createElement("form");
    _element.action = action;
    _element.method = method;
    _element.id = name;
    const _inputList = uList("form-list", false);
    _element.appendChild(_inputList.get());

    const get = ()=> _element;

    const addInput = (input)=> _inputList.add("", input);

    return {
        get,
        addInput
    }

    
});

