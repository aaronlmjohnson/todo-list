import { div } from './dom/div';
import { uList } from './dom/uList';
import { cardContent } from './cardContent'

export const cardElement = (cardData)=>{

    // const attributes = cardData.getAttributes();// change this too tightly coupled
    const content = document.getElementById("content");
    
    const _create = ()=>{
        const card = div("card", false).get();
        const cardElementsArr = cardContent(cardData).get();
        const cardElementsList = uList("card-elements", true);

        cardElementsArr.forEach((element)=>{
            cardElementsList.add("card-item", element);
        });
       
        card.appendChild(cardElementsList.get());
        return card;
    }

    const _card = _create();

    const get = ()=> _card;

    return {
        get
    };
}