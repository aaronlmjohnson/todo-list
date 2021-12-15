export const todoCardData = (title, description, dueDate)=>{
    const _title = title;
    const _description = description;
    const _dueDate = dueDate;

    // const getTitle = ()=> _title;
    // const getDescription = ()=> _description;
    // const getDueDate = ()=> _dueDate;

    const getAttributes = ()=>{
        return {
            title: _title,
            description: _description,
            dueDate: _dueDate
        }
    }

    return {
        getAttributes
    //    getTitle,
    //    getDescription,
    //    getDueDate
    };
};