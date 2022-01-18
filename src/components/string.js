export const string = (()=>{
    const titleCase = (str)=> str.split('').map((c, i)=>  i == 0 ? c.toUpperCase() : c).join('');

    const camelCase = (str) =>{
        return str.split('-').map((word, i)=>{
            return i < 1 ? word : string.titleCase(word);
        }).join('');
    }

    const kebabCase = (name)=> name.split(' ').join('-').toLowerCase();
    

    return {
        titleCase,
        camelCase,
        kebabCase
    }
})();