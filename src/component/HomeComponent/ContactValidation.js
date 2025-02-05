 
  export default function ContactValidation(values){
    const errors = {};

    

    const email_pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const phone_pattern = /^[0-9]+$/;

    if(values.name === ""){
        errors.name = "Name is required";
    }
  
    if(values.email === ""){
        errors.email = "Email is required";
    }
    else if(!email_pattern.test(values.email)){
        errors.email = "Email is invalid";
    }

    if(values.contact === ""){
        errors.contact = "Contact is required";
    }
    else if(!phone_pattern.test(values.contact)){
        errors.contact = "Contact is invalid";
    }

    if(values.message === ""){
        errors.message = "Message is required";
    }
    else if(values.message.length < 5){
        errors.message = "Message is too short";
    }
 
    return errors;

}

   

 

