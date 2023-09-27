import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    age: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Nombre:', formData.name);
    console.log('Edad:', formData.age);
  }

  return (
    <div className='App'>
        <h1>Welcome {formData.name}</h1>
    <form onSubmit={handleSubmit} name='formulario'>
      <label htmlFor="name">Nombre:<input type="text" id='name' name="name" value={formData.name} onChange={handleInputChange}/></label>
      <br />
      <label htmlFor="age">Edad:<input type="number" id='age' name="age" value={formData.age} onChange={handleInputChange}/></label>
      <br />
      <button type="submit" disabled={formData.name===''}>Enviar</button>
    </form>
    </div>
  );
}

export default Form;