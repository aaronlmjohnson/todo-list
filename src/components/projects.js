const projects = (()=>{
    const _projects = [];
    const add = (project) => _projects.push(project);
    const get = ()=> _projects;

    return {
        add,
        get
    }
})();

export default projects;