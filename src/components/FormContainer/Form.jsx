export const Form = ({ formData, saveChanges, errors, validForm }) => {

  const finishOrder = (e)=>{
    e.preventDefault()
    if (validForm()) {
        console.log('enviando;', formData)
    }
  }
  
  return (
    <form className="formFinal" onSubmit={finishOrder}>
      <input
        className="campo"
        type="text"
        name="name"
        placeholder="Ingresa tu nombre"
        onChange={saveChanges}
        value={formData.name}
        />
        {errors && errors.name && <span>{errors.name}</span>}
        <input
        className="campo"
        type="text"
        name="lastName"
        placeholder="Ingresa tu apellido"
        onChange={saveChanges}
        value={formData.lastName}
        />
        {errors && errors.lastName && <span>{errors.lastName}</span>}
        <input
        className="campo"
        type="text"
        name="phone"
        placeholder="Ingresa tu número de teléfono"
        onChange={saveChanges}
        value={formData.phone}
        />
        {errors && errors.phone && <span>{errors.phone}</span>}
        <input
        className="campo"
        type="email"
        name="email"
        placeholder="Ingresa tu email"
        onChange={saveChanges}
        value={formData.email}
        />
        {errors && errors.email && <span>{errors.email}</span>}
        <input
        className="campo"
        type="email"
        name="emailV"
        placeholder="Repite tu email"
        onChange={saveChanges}
        value={formData.emailV}
        />
        {errors && errors.emailV && <span>{errors.emailV}</span>}
        <button className="btnEnviar">Terminar compra</button>
    </form>
    )
}
