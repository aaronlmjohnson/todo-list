
export const cardElement = (cardData)=>{
    //take the card Data and create cards out of it by outputting
    //each element in a list/paragraphs within a div
    const attributes = cardData.getAttributes();
    const content = document.getElementById("content");
    const create = ()=>{
        const card = document.createElement("div");
        card.classList.add("card");
        for(const attr in attributes){
            const element = document.createElement("p");
            element.innerText = `${attr}: ${attributes[attr]}`;
            card.appendChild(element);
        }
        content.appendChild(card);
    }

    return {
        create
    };
}