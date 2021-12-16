import './assets/styles/style.css';
import { todoCardData } from './TodoCardData';
import { cardElement } from './CardElement'


const data = todoCardData("workout", "go to the gym to workout", "Friday");
const content = document.getElementById("content");
const card = cardElement(data).create();

content.appendChild(card);


