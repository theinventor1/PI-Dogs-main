import React, { useState, useEffect } from 'react';
import { Form, Cont, Tit1, Label, Input, Button,  } from './styled.Formraza';
import axios from 'axios';

const FormPage = () => {

 const [form, setForm] = useState({
   id:"",
   nombre: "",
   altmin: "",
   altmax: "",
   pesomin:"",
   pesomax:"",
   adevida: ""  
 }); 

 const [errors, setErrors] = useState({
  id:  "",
  nombre: "",
  altmin: "",
  altmax: "",
  pesomin:"",
  pesomax:"",
  adevida: ""  
 }); 
  
 const changeHandler = (event) => {
    // console.log('quiero hacer un cambio') 

   const property = event.target.name;
   const value = event.target.value;

   validate({...form, [property]:value});
   setForm({...form, [property]:value});
   
 };

 const validate = (form) => {
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.nombre)) {
     setErrors( { ...errors, nombre:"" } );
      console.log(`el email ${form.nombre} esta bien  `);
  } else {
     setErrors({...errors, nombre:"hay un error en el nombre (email)"})
     console.log(`el email ${form.nombre} esta mal`);
  }


 };

 const submitHandler = (event) => {
   event.preventDefault();
   console.log('form:',form);
   alert("apretado el boton");
 }

 return (
  <Cont>
   <form onSubmit = {submitHandler} >
   <h2>Form Ingreso</h2>
   <div >
     <label>ID:</label><Input   type="number"   value={form.id}      onChange={changeHandler} name="id"/>
     <label>Nombre:</label><Input  type="text"  value={form.nombre}  onChange={changeHandler} name="nombre"/>
     <label>Alt(mín):</label><Input type="text" value={form.altmin}  onChange={changeHandler} name="altmin"/>
     <label>Alt(máx):</label><Input type="text" value={form.altmax}  onChange={changeHandler} name="altmax"/>
     <label>Peso(mín):</label><Input type="text"value={form.pesomin} onChange={changeHandler} name="pesomin"/>
     <label>Peso(máx):</label><Input type="text"value={form.pesomax} onChange={changeHandler} name="pesomax"/>
     <label>Años vida:</label><Input type="text"value={form.adevida} onChange={changeHandler} name="adevida"/>
    <button type="submit">Crear nueva raza</button>
    </div>
   </form>
  </Cont>
 );
};

export default FormPage;
