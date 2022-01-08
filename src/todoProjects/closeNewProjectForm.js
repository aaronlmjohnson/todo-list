export const closeNewProjectForm = ()=>{
    const _form = document.getElementById('new-project-form');
    const _newProjectButton = document.getElementById('new-project-button');

    _form.reset();
    _form.remove();
    _newProjectButton.style.display = 'block';


}