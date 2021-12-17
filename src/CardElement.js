import { div } from './dom/div';
import { uList } from './dom/uList';
import { cardContent } from './cardContent'

export const cardElement = (cardData)=>{

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