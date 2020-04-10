const validate = values =>{
    const errors = {};
    const {title, description} = values;
    if(!title){
        errors.title = "Require";
    }else if(title.trim() && title.length < 2){
        errors.title = "Must be 2 characters or more";
    }
    return errors;
}
export default validate;