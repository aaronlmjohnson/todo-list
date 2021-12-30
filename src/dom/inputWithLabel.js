import { div } from './div'

export const inputWithLabel = (input, label)=>{
    const _div = div("form-item", false);

    _div.append(label);
    _div.append(input);
    

    return _div;
};