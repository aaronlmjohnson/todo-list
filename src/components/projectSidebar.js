import { div } from './dom';
import { header } from './dom';
import newProjectForm from './newProjectForm';
import addProjectButton from './addProjectButton';



 const projectSidebar = (()=>{
    const _sideBar = div("project-sidebar", true);
    const _projects = div("project-links", true);
    const _header = header(1, "Projects");
    
    [_header, _projects, addProjectButton].forEach((element)=> _sideBar.append(element));
    _projects.append(newProjectForm);

    return _sideBar;
})();

export default projectSidebar;