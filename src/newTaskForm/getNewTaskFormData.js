export const getNewTaskFormData = ()=>{
    const _form = document.getElementById("new-task-form");
    const _formData = new FormData(_form);
    const _processedData = {};
    
    for(let keyValue of _formData.entries()){
        _processedData[keyValue[0]] = keyValue[1];
    };

    return _processedData;
}