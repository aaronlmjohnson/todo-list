import { button } from './dom';

const addProjectButton = (()=>{
    const _element = button("add-project-button", true, "Add Project ＋");
    return _element;
})();

export const getAddProjectButton = ()=>{
    return document.getElementById('add-project-button');
}

export default addProjectButton;