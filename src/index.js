import './assets/styles/style.css';
import { cardCreateForm } from './cardCreateForm';
import { cardFormHandler } from './cardFormHandler'


// const data = todoCardData("workout", "go to the gym to workout", "Friday");
const content = document.getElementById("content");
// const card = cardElement(data).get();
const cardForm = cardCreateForm().get();

content.appendChild(cardForm);
// content.appendChild(card);
cardFormHandler();
//const retrieveCardData = ()=>{
    
//}



