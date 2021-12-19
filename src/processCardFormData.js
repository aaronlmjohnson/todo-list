export const processCardFormData = (formData) => {
        const obj = {};
        for (var key of formData.keys())
            obj[key] = formData.get(key);
         return obj;
};