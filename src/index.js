import './assets/styles/style.css';
import projectSidebar, { addLinkToSideBar } from "./components/projectSidebar";
import projectLink from './components/projectLinks';
import project, {createNewProject, projectElement} from './components/project';
import projectEventHandlers from './components/projectEventHandlers';



const content = document.getElementById('content');
const projectData = {title:'default project'};

content.append(projectSidebar);
createNewProject(projectData, true);

projectEventHandlers();
