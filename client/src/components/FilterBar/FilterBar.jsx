import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Div,Select,Button,LoadingText,Input } from './styled.FilterBar';
const urltemps = 'http://localhost:3001/temperaments';
function FilterBar({ onFiltro, onFiltro2 }) {

  const [temperaments, setTemperaments] = useState('');
  const [temperamentOptions, setTemperamentOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**esto es nuevo */
  const [filterValue, setFilterValue] = useState('');
  /** */
  
  const fetchTemperaments = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(urltemps);
      const temps = response.data;
      setTemperamentOptions(temps);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTemperaments();
  }, []);

  const handleTemperamentChange = (event) => { setTemperaments(event.target.value); };

  const handleFilter = () => { onFiltro2(filterValue); };
 
  return (
  <Div>
   <select value={temperaments} onChange={handleTemperamentChange} >
     <option value="">Seleccion</option>
     {temperamentOptions.map((temperamento) => (
       <option key={temperamento.idtemp} value={temperamento.nombret}>
         {temperamento.nombret}
       </option>
     ))}
   </select>
     <Button onClick={ () => onFiltro(temperaments) }>Busca</Button>
     {isLoading && <LoadingText>Cargando temperamentos...</LoadingText>}      
     
     <Input type="text" value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />     
     <Button onClick={handleFilter}>Filtrar</Button>
  </Div>
 );
}
export default FilterBar;
