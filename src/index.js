import './assets/styles/style.css';
import projectSidebar, { addLinkToSideBar } from "./components/projectSidebar";
import projectLink from './components/projectLinks';
import project, {projectElement} from './components/project';
import projectEventHandlers from './components/projectEventHandlers';



const content = document.getElementById('content');
const projectData = {title:'default'};

content.append(projectSidebar);
const defaultProject = projectElement(project(projectData), true);
const randomProject = projectElement(project({title:'cake'}), true);

content.append(defaultProject);
projectEventHandlers();
