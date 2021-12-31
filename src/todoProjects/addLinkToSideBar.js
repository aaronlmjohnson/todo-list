export const addLinkToSideBar = (link)=>{
    const projectLinks = document.getElementById('project-links');
    projectLinks.append(link);
}