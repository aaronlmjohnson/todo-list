import { form } from '../dom/form';
import { formInput } from '../dom/formInput';

export const projectCreateForm = ()=>{
    const _form = form('#', '#', 'project-create');

    const _name = formInput('project-name', 'text',"");
    //const _submit = formInput('project-submit', 'submit')

    _form.addInput(_name.get())
    //_form.addInput(_submit.get());
    const get = ()=> _form.get();

    return { get };
}