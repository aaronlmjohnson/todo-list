import { getProject } from "./getProject";
import { getProjects } from "./getProjects";

export const doesProjectExist = (projectId)=> getProjects().includes(getProject(projectId));