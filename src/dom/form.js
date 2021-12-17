import { uList } from "./uList";

export const form = ((action = "#", method = "#", name = "form")=>{ 
    const _element = document.createElement("form");
    _element.action = action;
    _form.method = method;

    const _inputList = uList("form-list", false);
    _element.appendChild(_inputList);

    const get = ()=> _element;

    const addInput = (input)=> _inputList.add("", input);

    return {
        get,
        addInput
    }

    
});

