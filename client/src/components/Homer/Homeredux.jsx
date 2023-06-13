import Cardsredux from '../Cards/Cardsredux';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux'; 
import { getPerros, getPerro2, orderCards, aumentarContador,filtrarPerros } from '../../redux/actions';
import { AppCont } from '../../styledCompApp';
const urltemps = 'http://localhost:3001/temperaments';
const  Homeredux = (props) => {   /** { contador } */
 let {  } = props;
 //console.log('reduxprops:', props ,'.');

 const [ raza, setRaza ]   = useState(""); 
    /** paginacion */
 const [ curPag, setCurPag ] = useState(1); // Página actual
 const cardsxPag = 8; // Número de tarjetas por página
    /** fin paginacion */ 

const [temperaments, setTemperaments] = useState(''); 
const [temperamentOptions, setTemperamentOptions] = useState([]);    
const [isLoading, setIsLoading] = useState(false);

 const dispatch = useDispatch();    
 let doggystyle = [];


 useEffect( () => { dispatch(getPerros() ); 
 // dispatch(getUsers() );
 }, [ ] );

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
useEffect( () => {   llenaTemperaments();   }, []);           
  const selectedData = useSelector(state => state.perros2);
 // console.log('selectedData:',selectedData, 'largo:', selectedData.length, '.'); 
  const handleOrder  = (evento) => { dispatch ( orderCards(evento.target.value));  };
  const handleSearch = () => { dispatch(getPerro2(raza)); };  
  /**aqui debo despachar la accion filtrarPerros()  */
  const handleOnFiltro = (untemperament) => {  dispatch ( filtrarPerros(untemperament)) };

  const totalPages = Math.ceil(selectedData.length / cardsxPag);  /**Total de paginas  */
 // console.log('totalPages:',totalPages);
  const handleTemperamentChange = (event) => {  setTemperaments(event.target.value);  };  /**lleno temperamentos en el select */

 return (
 <AppCont>    
  <div>
  { Array.from({ length: totalPages }, (_, index) => (
       <button key={index + 1} onClick = { 
        () => setCurPag(index + 1) 
        } disabled={curPag === index + 1} > {index + 1} 
       </button>
          ))}   
   <h5>SELECCION</h5>
    <select onChange= { handleOrder }>
           <option value="A">Ascendente</option>
           <option value="D">Descendente</option>
     </select>  
     <input type="search" value={ raza } onChange={ (e) => setRaza(e.target.value) } />
     <button onClick = { handleSearch }>SEARCH REDUX</button>
   <div>   
   <select value={temperaments} onChange={handleTemperamentChange} >
     <option value="">Seleccion</option>
     {temperamentOptions.map((temperamento) => (
       <option key={temperamento.idtemp} value={temperamento.nombret}>
         {temperamento.nombret}
       </option>
     ))}
   </select>
   <button onClick={  () => handleOnFiltro(temperaments)   }>BuscaTT</button>
   </div>
  </div> 
    <Cardsredux losdoggies = { props.perros2 } currentPage={curPag} cardsPerPage={cardsxPag} />
 </AppCont>
  )
} 
 const mapStateToProps = (state) => {
   return {   
    perros2: state.perros2,
    contador: state.contador,
    users: state.users 
   } 
 }
 const mapDispatchToProps = (dispatch)=>{
 return {  
  getPerro2 : () => dispatch( getPerro2() ),
  aumentarContador: () => dispatch( aumentarContador() ),
//getUsers: () => dispatch(getUsers() )  
/**la ejecutamos porque necesito el objeto que está retornando  */     
  }
}

 export default connect ( 
    mapStateToProps,    /**recive automaticamente estado global */
    mapDispatchToProps,  /** */
   null ) (Homeredux);