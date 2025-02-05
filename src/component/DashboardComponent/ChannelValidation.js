 
  export default function ChannelValidation(values){
    const errors = {};

  
    
    if(values.name === ""){
        errors.name = "Name is required";
    }
    

    if(values.domain === ""){
        errors.domain = "Domain is required";
    }
    if(values.streamKey === ""){
        errors.streamKey = "Limit is required";
    }
    return errors;
  }


  
