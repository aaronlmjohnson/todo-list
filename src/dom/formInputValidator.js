export const formInputValidator = (()=>{
    const _validInputs = ["button","checkbox","color","date","datetime-local",
                            "email","file","hidden","image","month","number",
                            "password","radio","range","reset","search","submit",
                            "tel","text", "time","url","week"];
    const isValid = (formInput)=>{
        if(_validInputs.includes(formInput))
            return true;
        else 
            return false;
    }
    return {
        isValid
    }
})();