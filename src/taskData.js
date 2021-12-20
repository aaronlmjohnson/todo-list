export const taskData = (formData)=>{
    const _createKeyName = (idName)=> idName.split('-')[1];
    
    const _setAttributes = ()=>{
        const obj = {};
        for(let key in formData)
            obj[_createKeyName(key)] = formData[key];
        return obj;
    }
    
    const _todoCardContent = _setAttributes();
    const get = ()=> _todoCardContent;

    return {
        get
    };
};