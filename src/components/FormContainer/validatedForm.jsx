import { useState } from "react";

export const validatedForm = (WrappedComponent) => {
    
    const ValidatedForm = (props) =>{
    const [errors, setErrors] = useState({})
    const validForm = () => {
      let newErrors = {}
      let isValid = true

      if (!props.formData.name) {
        newErrors.name = "No puedes dejarlo vacio"
        isValid = false
      }
      if (!props.formData.lastName) {
        newErrors.lastName = "No puedes dejarlo vacio"
        isValid = false
    }
       if (!props.formData.phone) {
        newErrors.phone = "Necesitamos tu número de teléfono"
        isValid = false
        }
      if (!props.formData.email) {
        newErrors.email = "Debes escribir tuemail@algo.com"
        isValid = false
      }
      if (props.formData.emailV !== props.formData.email) {
        newErrors.email = "Debes escribir el mismo email que en el campo anterior"
        isValid = false
      }
      setErrors(newErrors)
      return isValid
    }
    
    return <WrappedComponent 
    {...props} 
    errors={errors} 
    validForm={validForm}
    />
}

return ValidatedForm;
}
