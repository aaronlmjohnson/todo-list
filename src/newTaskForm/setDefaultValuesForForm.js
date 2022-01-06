export const setDefaultValuesForForm = ()=>{
    const elements = [...document.getElementById("new-task-form").elements];
    elements.forEach((element)=>{
        if(element.id != "submit" && element.id != "cancel"){
            if(element.id == "title") element.defaultValue = "Clean";
            if(element.id == "description") element.defaultValue = "Clean kitchen and bathroom";
            if(element.id == "date") element.defaultValue = "2022-03-07";
            if(element.id == "priority") element.defaultValue = 70;
        }   
    });
}