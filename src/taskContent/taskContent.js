export const taskContent = (taskData)=>{

    const _contentArr = [];
    for(const data in taskData){
        const element = document.createElement("p");
        element.innerText = `${data}: ${taskData[data]}`;
        _contentArr.push(element);
    }

    const get = ()=> _contentArr;

    return {
        get
    };
}