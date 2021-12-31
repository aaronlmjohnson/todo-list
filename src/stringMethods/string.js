export const string = (()=>{
    const titleCase = (str)=> 
        str.split('').map((c, i)=>  i == 0 ? c.toUpperCase() : c).join('');
    return {
        titleCase
    }
})();