import { form } from './dom/form';
import { formInput } from './dom/formInput';

export const cardCreateForm = ()=>{
    const _form = form("#", "#", "cardCreate");
    const _cardName = formInput("card-name", "text", "Name: ");

    const _cardDescription = formInput("card-description", "text", "Description: ");
    _form.addInput(_cardName.get());
    _form.addInput(_cardDescription.get());

    const get = ()=> _form.get();
    return {
        get
    }

}