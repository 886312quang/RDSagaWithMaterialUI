const validate = values =>{
    const errors = {};
    const {title,description} = values;
    if(!title){
        errors.title = "Require";
    }else if(title.trim() && title.length < 2){
        errors.title = "Must be 2 characters or more";
    }
    if(!description){
        errors.title = "Require";
    }
    return errors;
}
export default validate;