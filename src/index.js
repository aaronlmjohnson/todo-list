import './assets/styles/style.css';
import { taskCreateForm } from './taskCreateForm/taskCreateForm';
import { taskFormHandler } from './taskCreateForm/taskFormHandler';
import { button } from './dom/button';

const content = document.getElementById("content");
const taskForm = taskCreateForm().get();
const addTaskFormButton = button("task-form-button", true, "Add Task").get();

content.appendChild(addTaskFormButton);

content.appendChild(taskForm);
taskFormHandler();



