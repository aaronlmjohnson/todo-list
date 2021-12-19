import { todoCardData } from './TodoCardData';
import { cardElement } from './CardElement';
import { processCardFormData } from './processCardFormData';
import { getCardFormData } from './getCardFormData';

export const cardFormHandler = ()=>{
    const formButton = document.getElementById('submit');
    const content = document.getElementById('content');
    formButton.addEventListener('click', (e)=>{
        e.preventDefault();
        const todoTaskData = processCardFormData(getCardFormData());
        const dataForCard = todoCardData(todoTaskData).get();
        content.appendChild(cardElement(dataForCard).get());
    });
};