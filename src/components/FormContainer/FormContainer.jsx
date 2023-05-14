import { useState } from "react";
import { Form } from "../Form/Form";
import { validatedForm } from "../Form/validatedForm";

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
    setFormData={setFormData}
    saveChanges={saveChanges}
    />
    )
}
