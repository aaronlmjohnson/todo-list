import { formInputValidator } from './formInputValidator';

export const formInput = (name, type)=>{
    if(!formInputValidator(type).isValid())
        throw 'invalid form input';
        
    const _label = _createLabel();
    const _input = _createInput();

    _label.appendChild(_input);

    const _createLabel = ()=>{
        const element = document.createElement("label");
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

    const get = () => _label;

    return {
        get
    }
};