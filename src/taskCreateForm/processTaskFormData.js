export const processTaskFormData = (formData) => {
        const obj = {};
        for (var key of formData.keys())
            obj[key] = formData.get(key);
         return obj;
};