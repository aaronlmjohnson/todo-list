import { addEventListener } from '../dom/addEventListener';
import { createTaskElement } from './createTaskElement';
import { cancelTaskCreation } from './cancelTaskCreation';

export const newTaskFormHandler = ()=>{
    const formButton = document.getElementById('submit');
    const cancelButton = document.getElementById('cancel');

    addEventListener(formButton, 'click', createTaskElement);
    addEventListener(cancelButton, 'click', cancelTaskCreation);



};