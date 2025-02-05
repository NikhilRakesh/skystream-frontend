
export default function MessageValidation(values){
    const errors = {};


    
    if(values.subject === ""){
        errors.subject = "Subject is required";
    }
    

    if(values.message === ""){
        errors.message = "message is required";
    }
    else if(values.message.length < 5){
        errors.message = "message is too short";
    }
   
    return errors;
  
}