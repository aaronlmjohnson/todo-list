import { formInputValidator } from './formInputValidator';

export const formInput = (name, type, label ="")=>{

    if(!formInputValidator.isValid(type))
        throw 'invalid form input';
        
    const _createLabel = ()=>{
        const element = document.createElement("label");
        element.innerText = label;
        element.htmlFor = name;
        return element;
    };

    const _createInput = ()=>{
        const element = document.createElement("input");
        element.type = type;
        element.name = name;
        element.id = name;

        return element;
    };

    const _label = _createLabel();
    const _input = _createInput();

    _label.appendChild(_input);

    const get = () => _label;

    return {
        get
    }
};