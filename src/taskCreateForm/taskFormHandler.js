import { taskData } from '../taskContent/taskData';
import { taskElement } from '../taskContent/taskElement';
import { processTaskFormData } from './processTaskFormData';
import { getTaskFormData } from './getTaskFormData';

export const taskFormHandler = ()=>{
    const formButton = document.getElementById('submit');
    const addTaskFormButton = document.getElementById('task-form-button');
    const cancelButton = document.getElementById('cancel');

    
    
    formButton.addEventListener('click', (e)=>{
        e.preventDefault();
        const project = document.getElementById('active-project');
        const form = document.getElementById('task-create');
        const formTaskData = processTaskFormData(getTaskFormData());
        const dataForTaskCreation = taskData(formTaskData).get();
        project.appendChild(taskElement(dataForTaskCreation).get());
        
        form.style.display = 'none';
    });

    addTaskFormButton.addEventListener('click', (e)=>{
        const form = document.getElementById('task-create');
        form.style.display = 'block';
    });

    cancelButton.addEventListener('click', (e)=>{
        const form = document.getElementById('task-create');
        form.style.display = 'none';
    });



};