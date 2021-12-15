import './assets/styles/style.css';
import { todoCardData } from './TodoCardData';
import { cardElement } from './CardElement'


const data = todoCardData("workout", "go to the gym to workout", "Friday");

const card = cardElement(data);

card.create();

