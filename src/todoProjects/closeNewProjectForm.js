export const closeNewProjectForm = (e)=>{
    const _form = document.getElementById('new-project-form');
    const _newProjectButton = document.getElementById('new-project-button');
    _form.remove();
    e.target.remove();
    _newProjectButton.style.display = 'block';

}