export const priorityHandler =(priorityValue)=>{
    if(priorityValue < 33) return 'Low';
    if(priorityValue < 66) return 'Medium';
    return 'High';

};