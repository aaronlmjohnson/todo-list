import { todoCardData } from './TodoCardData';
import { cardElement } from './CardElement';
import { processCardFormData } from './processCardFormData';
import { getCardFormData } from './getCardFormData';

export const cardFormHandler = ()=>{
    const formButton = document.getElementById('submit');
    formButton.addEventListener('click', (e)=>{
        e.preventDefault();
        const todoTaskData = processCardFormData(getCardFormData());
        console.log(todoTaskData);
        const dataForCard = todoCardData()
        // const card = cardElement()
    });
};