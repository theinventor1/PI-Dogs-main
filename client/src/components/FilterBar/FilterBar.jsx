import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Div } from './styled.FilterBar';
const urltemps = 'http://localhost:3001/temperamentos';
function FilterBar({ onFiltro }) {
  const [temperaments, setTemperaments] = useState('');
  const [temperamentOptions, setTemperamentOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleTemperamentChange = (event) => {
       setTemperaments(event.target.value);
 };

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
     <button onClick={ () => onFiltro(temperaments) }>Busca</button>
     {isLoading && <div>Cargando temperamentos...</div>}      
     <input type="text" />
     <button >Filtrar</button>
  </Div>
 );
}
export default FilterBar;
