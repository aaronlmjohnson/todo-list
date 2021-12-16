export const cardContent = (cardData)=>{

    const _contentArr = [];
    for(const data in cardData){
        const element = document.createElement("p");
        element.innerText = `${data}: ${cardData[data]}`;
        _contentArr.push(element);
    }

    const get = ()=> _contentArr;

    return {
        get
    };
}