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

const getNewProjectForm = ()=> document.getElementById('new-project-form');

export const displayNewProjectForm = () => getNewProjectForm().style.display = "block";

export default newProjectForm;