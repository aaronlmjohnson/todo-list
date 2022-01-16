import { form } from './dom';

export const getProjectFormData = ()=>{
    const _form = document.getElementById("new-project-form");
    const _formData = new FormData(_form);
    const _processedData = {};
    for(let keyValue of _formData.entries()){
        _processedData[keyValue[0]] = keyValue[1];
    };

    return _processedData;
};

 const newProjectForm = (()=>{
    const _form = form('#', '#', 'new-project-form');

    _form.addInput("title", "text");
    _form.addInput('cancel-project-button', 'button', 'cancel');
    return _form.get();
})();

export const getNewProjectForm = ()=> document.getElementById('new-project-form');

export const displayNewProjectForm = () => getNewProjectForm().style.display = "block";
export const hideNewProjectForm = ()=> {
    getNewProjectForm().style.display = 'none';
    getNewProjectForm().reset();
}

export const processNewProjectFormData = ()=>{
    const formData = new FormData(getNewProjectForm());
    const processedData = {};
    for(let key of formData.entries())
        processedData[key[0]] = key[1];
    return processedData;
    
}

export default newProjectForm;