export const string = (()=>{
    const titleCase = (str)=> str.split('').map((c, i)=>  i == 0 ? c.toUpperCase() : c).join('');


    const camelCase = (str) =>{
        return str.split('-').map((word, i)=>{
            return i < 1 ? word : string.titleCase(word);
        }).join('');
    }

    const kebabCase = (name)=>{
        return name.split(' ').join('-');
    }

    return {
        titleCase,
        camelCase,
        kebabCase
    }
})();