export const retrieveCardFormData = ()=> {
    const _form = document.getElementById('card-create');
    const _retrieveData = new FormData(_form);

     const get = ()=> _retrieveData;
    
    return { get };
};