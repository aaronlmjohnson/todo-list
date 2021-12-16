import { div } from './div';
import { uList } from './uList';
import { cardContent } from './cardContent'

export const cardElement = (cardData)=>{
    //take the card Data and create cards out of it by outputting
    //each element in a list/paragraphs within a div
    const attributes = cardData.getAttributes();
    const content = document.getElementById("content");
    const create = ()=>{
        const card = div("card", false).get();
        const cardElementsArr = cardContent(attributes).get();
        const cardElementsList = uList("card-elements", true);

        cardElementsArr.forEach((element)=>{
            cardElementsList.add("card-item", element);
        });
       
        card.appendChild(cardElementsList.get());
        return card;
    }

    return {
        create
    };
}