export const getCardFormData = ()=> {
    const _form = document.getElementById('card-create');
    const _retrieveData = new FormData(_form);

     return _retrieveData;
};