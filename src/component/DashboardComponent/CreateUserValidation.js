 
  export default function CreateUserValidation(values){
    const errors = {};


    const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const password_pattern = /^[a-zA-Z\d]{8,}$/;

    if(values.password === ""){
        errors.password = "Password is required";
    }
    else if(!password_pattern.test(values.password)){
        errors.password = "Password is invalid";
    }
    if(values.name === ""){
        errors.name = "Name is required";
    }

    if(values.domain === ""){
        errors.domain = "Domain is required";
    }
    if(values.limit === ""){
        errors.limit = "Limit is required";
    }
    
    if(values.expiryDate === ""){   
        errors.expiryDate = "Expiry Date is required";
    }
  
    if(values.email === ""){
        errors.email = "Email is required";
    }
    else if(!email_pattern.test(values.email)){
        errors.email = "Email is invalid";
    }
    return errors;
  }

  
