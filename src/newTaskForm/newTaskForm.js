import { form } from '/src/dom/form.js';
import { formItem } from '/src/dom/formItem';

export const newTaskForm = (()=>{
    const _form = form("#", "#", "new-task-form");
    const _formItems = [];
    const _taskName = formItem("title", "text", "Title: ");
    const _taskDescription = formItem("description", "text", "Description: ");
    const _taskDate = formItem("date", "date", "Date: ");
    const _taskPriority = formItem("priority", "range", "Priority: ");
    const _submit = formItem("submit", "submit");
    const _cancel = formItem("cancel","button", "Cancel");
    
    _form.addFormItem(_taskName);
    _form.addFormItem(_taskDescription);
    _form.addFormItem(_taskDate);
    _form.addFormItem(_taskPriority);
    _form.addFormItem(_submit);
    _form.addFormItem(_cancel);

   return _form.get();
    

})();