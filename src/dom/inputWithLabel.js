import { div } from './div'

export const inputWithLabel = (input, label)=>{
    const _div = div("form-item", false);

    _div.append(input);
    _div.append(label);

    return _div;
};