import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Div,Select,Button,LoadingText,Input } from './styled.FilterBar';
const urltemps = 'http://localhost:3001/temperaments';

function FilterBar({ onFiltro, onFiltroId, onFiltroPeso }) {

  const [temperaments, setTemperaments] = useState('');
  const [temperamentOptions, setTemperamentOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**esto es nuevo */
  const [filterValue, setFilterValue] = useState('');

  const [filterPeso, setFilterPeso] = useState(''); 
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
  const handleFilter = () => { onFiltroId(filterValue); };

  const handleFilterPeso = () => { onFiltroPeso(filterPeso); };
 
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
     {  isLoading && <LoadingText>Cargando temperamentos.</LoadingText>  }
     <Input type = "text" value = { filterValue } onChange = { (e) => setFilterValue(e.target.value) } />     
     <Button onClick = {handleFilter} > Filtrar </Button>
     <Input type = "text" value = { filterPeso } onChange = { (e) => setFilterPeso(e.target.value) } />     
     <Button onClick={handleFilterPeso}>Fil x Peso</Button>
  </Div>
 );
}
export default FilterBar;
