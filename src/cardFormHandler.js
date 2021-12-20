import { todoCardData } from './TodoCardData';
import { cardElement } from './CardElement';
import { processCardFormData } from './processCardFormData';
import { getCardFormData } from './getCardFormData';

export const cardFormHandler = ()=>{
    const formButton = document.getElementById('submit');
    const addTaskFormButton = document.getElementById('task-form-button');
    const cancelButton = document.getElementById('cancel');

    const content = document.getElementById('content');
    formButton.addEventListener('click', (e)=>{
        e.preventDefault();
        const form = document.getElementById('card-create');
        const todoTaskData = processCardFormData(getCardFormData());
        const dataForCard = todoCardData(todoTaskData).get();
        content.appendChild(cardElement(dataForCard).get());
        form.style.display = 'none';
    });

    addTaskFormButton.addEventListener('click', (e)=>{
        const form = document.getElementById('card-create');
        form.style.display = 'block';
    });

    cancelButton.addEventListener('click', (e)=>{
        const form = document.getElementById('card-create');
        form.style.display = 'none';
    });



};