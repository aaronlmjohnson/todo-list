import './assets/styles/style.css';
import { taskCreateForm } from './taskCreateForm/taskCreateForm';
import { taskFormHandler } from './taskCreateForm/taskFormHandler';
import { button } from './dom/button';
import { projectElement } from './todoProjects/projectElement';

const content = document.getElementById("content");
const defaultProject = projectElement("default");
defaultProject.setAsActiveProject();

const taskForm = taskCreateForm().get();
const addTaskFormButton = button("task-form-button", true, "Add Task").get();

content.appendChild(addTaskFormButton);
content.appendChild(defaultProject.get());
content.appendChild(taskForm);
taskFormHandler();



