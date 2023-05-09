import { useState } from "react";
import { Form } from "./Form";
import { validatedForm } from "./validatedForm";

const ValidatedForm = validatedForm(Form)

export function FormContainer () {
    const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    emailV: "",
    });

    

    const saveChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
    <ValidatedForm 
    formData={formData} 
    saveChanges={saveChanges}
    />
    )
}
