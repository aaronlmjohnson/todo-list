import './assets/styles/style.css';

import { form } from './dom/form';
import { formItem } from './dom/formItem';



const newProjectForm = form('#', '#', 'create-project');

const content = document.getElementById("content");

const title = formItem("title", "text", "Title: ");

newProjectForm.addFormItem(title);

content.append(newProjectForm.get());




