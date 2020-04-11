const validate = values =>{
    const errors = {};
    const {title,description,actiontask} = values;
    if(!title){
        errors.title = "Require";
    }else if(title.trim() && title.length < 2){
        errors.title = "Must be 2 characters or more";
    }
    if(!description){
        errors.description = "Require";
    }
    if(!actiontask){
        errors.actiontask = "Require";
    }
    return errors;
}
export default validate;