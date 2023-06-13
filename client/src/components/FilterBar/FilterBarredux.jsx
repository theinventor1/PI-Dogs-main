import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Div, Select, Button, LoadingText, Input } from './styled.FilterBar';
const urltemps = 'http://localhost:3001/temperaments';

function FilterBarredux({ onFiltro, onFiltroId, onFiltroPeso }) {

  const [temperaments, setTemperaments] = useState(''); 

  const [temperamentOptions, setTemperamentOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  /**esto es nuevo */
  const [filterValue, setFilterValue] = useState('');

  const [filterPeso, setFilterPeso] = useState(''); 
  /** */  
  const llenaTemperaments = async () => {
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

  useEffect( () => {   llenaTemperaments();   }, []);  /**aqui llena el select con temperamentos  cuando monta  FilterBarredux */

  const handleTemperamentChange = (event) => {  setTemperaments(event.target.value); };

  const handleFilter = () => {   
        onFiltroId(filterValue); 
   }; /**aqui debo cambiar modificar el  state  */

  const handleFilterPeso = () => { onFiltroPeso(filterPeso); };
 
  return (
   
  <div>
   <select value={temperaments} onChange={handleTemperamentChange} >
     <option value="">Seleccion</option>
     {temperamentOptions.map((temperamento) => (
       <option key={temperamento.idtemp} value={temperamento.nombret}>
         {temperamento.nombret}
       </option>
     ))}
   </select>
     <button onClick={ () => onFiltro(temperaments) }>BuscaTTTT</button>

     {  isLoading && <LoadingText>Cargando temperamentos.</LoadingText>  }
     
     <input type = "text" value = { filterValue } onChange = { (e) => setFilterValue(e.target.value) } />     
     <button onClick = {handleFilter} > FiltrarTTTT </button>
     <input type = "text" value = { filterPeso } onChange = { (e) => setFilterPeso(e.target.value) } />     
     <button onClick={handleFilterPeso}>Fil x Peso</button>
  </div>
 );
}
export default FilterBarredux;
