import { form } from './dom/form';
import { formInput } from './dom/formInput';

export const taskCreateForm = ()=>{
    const _form = form("#", "#", "task-create");
    const _taskName = formInput("task-title", "text", "Title: ");
    const _taskDescription = formInput("task-description", "text", "Description: ");
    const _taskDate = formInput("task-date", "date", "Date: ");
    const _submit = formInput("submit", "submit");
    const _cancel = formInput("cancel","button", "Cancel");

    _form.addInput(_taskName.get());
    _form.addInput(_taskDescription.get());
    _form.addInput(_submit.get());
    _form.addInput(_cancel.get());
    _form.addInput(_taskDate.get());

    const get = ()=> _form.get();
    return {
        get
    }

}