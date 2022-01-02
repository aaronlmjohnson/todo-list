import { form } from '../dom/form';
import { formItem } from '../dom/formItem';

export const newProjectForm = (()=>{
    const _form = form('#', '#', 'new-project-form');

    _form.addFormItem(formItem("title", "text"));
    //_form.addFormItem(formItem("submit", "submit", ));
    return _form.get();
})();