export const inputValidator = (()=>{
    const _validInputs = ["button","checkbox","color","date","datetime-local",
                            "email","file","hidden","image","month","number",
                            "password","radio","range","reset","search","submit",
                            "tel","text", "time","url","week"];
    const isValid = (input)=>{
        if(_validInputs.includes(input))
            return true;
        else 
            return false;
    }
    return {
        isValid
    }
})();