import { addEventListener } from '../dom/addEventListener';
import { createTaskElement } from './createTaskElement';
import { closeNewTaskForm } from './closeNewTaskForm';
import { openNewTaskForm } from './openNewTaskForm';
import { getActiveProject } from '../todoProjects/getActiveProject';

export const newTaskFormHandler = ()=>{
    const formButton = document.getElementById('submit');
    const cancelButton = document.getElementById('cancel');
    const activeProject = getActiveProject();
    const addTask = activeProject.getElementsByClassName('add-task-button')[0];
    


    addEventListener(window, 'click', openNewTaskForm);
    addEventListener(formButton, 'click', createTaskElement);
    addEventListener(cancelButton, 'click', closeNewTaskForm);
};