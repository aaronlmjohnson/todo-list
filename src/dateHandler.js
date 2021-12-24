import { compareAsc, format } from 'date-fns'

export const dateHandler = (dateStr)=>{
    const dateArr = dateStr.split('-');
    const date = format(new Date(dateStr), 'MM-dd-yyyy');
    return date;
};