export const form = ((action = "#", method = "#", name = "form")=>{ 
    const _element = document.createElement("form");
    _element.action = action;
    _element.method = method;
    _element.id = name;

    const addFormItem = (formItem)=> _element.append(formItem);
    const get = ()=> _element;

    return {
        addFormItem,
        get
    };
});

