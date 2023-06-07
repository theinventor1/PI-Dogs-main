import React, { useState } from 'react';
import { Form, Cont, Tit1, Label, Input, Button } from './styled.Form';
import axios from 'axios';

const FormPage = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [minHeight, setMinHeight] = useState('');
  const [maxHeight, setMaxHeight] = useState('');
  const [minWeight, setMinWeight] = useState('');
  const [maxWeight, setMaxWeight] = useState('');
  const [lifeSpan, setLifeSpan] = useState('');
  const [temperaments, setTemperaments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dogData = {
      id: parseInt(id),
      name,
      height: { metric: `${minHeight} - ${maxHeight}`, },
      weight: { metric: `${minWeight} - ${maxWeight}`, },
      life_span: lifeSpan,
      temperament: temperaments,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };

    try {
      await axios.post('http://localhost:3001/dogs', dogData);
      alert('La raza fue creada correctamente');
     
    } catch (error) {
      console.error(error);
      alert('Error al insertar raza.');
    }
  };

  return (
<Cont>
 <Tit1>Formulario para crear una nueva raza de perro</Tit1>
 <Form onSubmit={handleSubmit}>
   <Label>ID:<Input type="number" value={id} onChange={(e) => setId(e.target.value)} required /></Label><br/>
   <Label>Nombre:<Input type="text" value={name} onChange={(e) => setName(e.target.value)} required /></Label> <br/>
   <Label>Alt(mín):<Input type="text" value={minHeight} onChange={(e) => setMinHeight(e.target.value)} required /></Label><br/>
   <Label>Alt (máx):<Input type="text" value={maxHeight}  onChange={(e) => setMaxHeight(e.target.value)} required /></Label><br/>
   <Label>Peso(mín):<Input type="text" value={minWeight} onChange={(e) => setMinWeight(e.target.value)} required /></Label><br/>
   <Label>Peso(máx):<Input type="text" value={maxWeight} onChange={(e) => setMaxWeight(e.target.value)} required /></Label><br/>
   <Label>Años de vida:<Input type="text" value={lifeSpan} onChange={(e) => setLifeSpan(e.target.value)} required /></Label><br/>
   <Label>Temperamentos:<Input type="text" value={temperaments} onChange={(e) => setTemperaments(e.target.value)} required /></Label><br/>
   <Button type="submit">Crear nueva raza</Button>
 </Form>
</Cont>
  );
};

export default FormPage;
