
export default function PushValidation(values){
    const errors = {};

    console.log(values)

    
    if(values.edge === ""){
        errors.edge = "Edge is required";
   
    return errors;
  }
}