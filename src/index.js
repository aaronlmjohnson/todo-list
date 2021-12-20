import './assets/styles/style.css';
import { cardCreateForm } from './cardCreateForm';
import { cardFormHandler } from './cardFormHandler';
import { button } from './dom/button';


// const data = todoCardData("workout", "go to the gym to workout", "Friday");
const content = document.getElementById("content");
// const card = cardElement(data).get();
const cardForm = cardCreateForm().get();
const addTaskFormButton = button("task-form-button", true, "Add Task").get();

content.appendChild(addTaskFormButton);

content.appendChild(cardForm);
// content.appendChild(card);
cardFormHandler();
//const retrieveCardData = ()=>{
    
//}



