import { form } from './dom/form';
import { formInput } from './dom/formInput';

export const cardCreateForm = ()=>{
    const _form = form("#", "#", "card-create");
    const _cardName = formInput("card-title", "text", "Title: ");
    const _cardDescription = formInput("card-description", "text", "Description: ");
    const _submit = formInput("submit", "submit");
    const _cancel = formInput("cancel","button", "Cancel");

    _form.addInput(_cardName.get());
    _form.addInput(_cardDescription.get());
    _form.addInput(_submit.get());
    _form.addInput(_cancel.get());

    const get = ()=> _form.get();
    return {
        get
    }

}