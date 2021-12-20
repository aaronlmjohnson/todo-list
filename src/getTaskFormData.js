export const getTaskFormData = ()=> {
    const _form = document.getElementById('task-create');
    const _retrieveData = new FormData(_form);

     return _retrieveData;
};