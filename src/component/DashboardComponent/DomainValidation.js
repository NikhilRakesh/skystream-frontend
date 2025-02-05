export default function DomainValidation(values) {
    const errors = {};
  
    const domain_pattern = /^(?=(.*[a-zA-Z\d]){3,}).*$/;
  
    if (!values) {
      errors.domain = "Domain is required";
    } else if (!domain_pattern.test(values)) {
      errors.domain = "Domain is invalid";
    }
  
    return errors;
  }
  