import { form } from '/src/dom/form.js';
import { formInput } from '/src/dom/formInput';

export const taskCreateForm = ()=>{
    const _form = form("#", "#", "task-create");
    const _taskName = formInput("task-title", "text", "Title: ");
    const _taskDescription = formInput("task-description", "text", "Description: ");
    const _taskDate = formInput("task-date", "date", "Date: ");
    const _taskPriority = formInput("task-priority", "range", "Priority: ");
    const _submit = formInput("submit", "submit");
    const _cancel = formInput("cancel","button", "Cancel");

    _form.addInput(_taskName.get());
    _form.addInput(_taskDescription.get());
    _form.addInput(_taskDate.get());
    _form.addInput(_taskPriority.get());
    _form.addInput(_submit.get());
    _form.addInput(_cancel.get());
    

    const get = ()=> _form.get();
    return {
        get
    }

}