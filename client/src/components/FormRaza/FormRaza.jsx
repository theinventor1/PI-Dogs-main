import React, { useState, useEffect } from 'react';
import {FormContainer,InputContainer,SelectContainer,Cont,Tit1,Form,Label,Input,Select,Button} from './styled.Formraza';
import axios from 'axios';

const FormPage = () => {
 const [id, setId] = useState('');
 const [name, setName] = useState('');
 const [minHeight, setMinHeight] = useState('');
 const [maxHeight, setMaxHeight] = useState('');
 const [minWeight, setMinWeight] = useState('');
 const [maxWeight, setMaxWeight] = useState('');
 const [lifeSpan, setLifeSpan] = useState('');
 const [temperaments, setTemperaments] = useState( [] ); /**array vacío */
 const [temperamentOptions, setTemperamentOptions] = useState([]);

  useEffect(() => {
   // Realiza la consulta a la base de datos para obtener los temperamentos disponibles
   const fetchTemperaments = async () => {
     try {
       const response = await axios.get('http://localhost:3001/temperaments');
       console.log(response);
       const temperamentos = response.data;

       setTemperamentOptions(temperamentos);
     } catch (error) {
       console.error(error);
     }
   };
   fetchTemperaments();
   }, []);

  const handleSubmit = async (e) => {
   e.preventDefault();
   /**convierte array en string */
   const temperamentString = temperaments.join(', ');
   const dogData = {
     id: parseInt(id),
     name,
     height: { metric: `${minHeight} - ${maxHeight}` },
     weight: { metric: `${minWeight} - ${maxWeight}` },
     life_span: lifeSpan,
     temperament: temperamentString, /**trasformo temperamento en string plano */
     updatedAt: new Date().toISOString(),
     createdAt: new Date().toISOString(),
   };
    try {
      console.log('esto va a post:',dogData,'.' )
      await axios.post('http://localhost:3001/postdog/', dogData);      
      alert('La raza fue creada correctamente');     
    } catch (error) {
      console.error(error);
      alert('Error al crear raza de perro');
    }
  };
  const handleSelectChange = (e) => {
   const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
   setTemperaments(selectedOptions);
  };
  return (
   <Cont>
     <Tit1>Ingreso Raza-Perro</Tit1>
     <FormContainer>
       <InputContainer>
        <Form onSubmit={handleSubmit}>
         <Label>ID:</Label>
         <Input type="number" value={id} onChange={(e) => setId(e.target.value)} required />
         <Label>Nombre:</Label>
         <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
         <Label>Alt(mín):</Label>
         <Input type="text" value={minHeight} onChange={(e) => setMinHeight(e.target.value)} required />
         <Label>Alt (máx):</Label>
         <Input type="text" value={maxHeight} onChange={(e) => setMaxHeight(e.target.value)} required />
         <Label>Peso(mín):</Label>
         <Input type="text" value={minWeight} onChange={(e) => setMinWeight(e.target.value)} required />
         <Label>Peso(máx):</Label>
         <Input type="text" value={maxWeight} onChange={(e) => setMaxWeight(e.target.value)} required />
         <Label>Años de vida:</Label>
         <Input type="text" value={lifeSpan} onChange={(e) => setLifeSpan(e.target.value)} required />
         <Button type="submit">Crear nueva raza</Button>
        </Form>
       </InputContainer>
       <SelectContainer>
         <Label>Temperamentos:</Label>
         <Select value={temperaments} onChange={handleSelectChange} required multiple>
           <option value="">Seleccione uno o más temperamentos</option>
           {temperamentOptions.map((temperamento) => (
           <option key={temperamento.idtemp} value={temperamento.nombret}>
               {temperamento.nombret}
           </option>
           ))}
         </Select>
       </SelectContainer>
     </FormContainer>
   </Cont>
 );
};


export default FormPage;
