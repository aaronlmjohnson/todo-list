import './assets/styles/style.css';

import  { input } from './dom/input';
import  { label } from './dom/label';
import { inputWithLabel } from './dom/inputWithLabel';


const textField = input("username", "text");
const textFieldLabel = label(textField, "Username: ");

const content = document.getElementById("content");

const usernameField = inputWithLabel(textFieldLabel, textField);

content.append(usernameField);




