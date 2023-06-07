import Cardsredux from '../Cards/Cardsredux';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
/** importar las action que vamos a invocar */
import { getPerros, getPerro, orderCards, filterBySource } from '../../redux/actions';

import { AppCont } from '../../styledCompApp';
var deparray = [];

const  Homeredux = (props) => {
   /** paginacion */
   const [ curPag, setCurPag ] = useState(1); // Página actual
   const cardsxPag = 6; 
   /** fin paginacion */ 
   /**para el search raza */
   const [raza, setRaza]   = useState(""); /**esto estaba bien  */  
   /**uso dispatch  */
   const dispatch = useDispatch();    
   // useEffect( () => { console.log('useEffect:',props.perros2); },
   //  [] );
   // console.log('perros2XX:', props.perros2);   
   const obtieneTodos = () =>{
     dispatch(getPerros());     
     console.log('obtieneTodos:');        
   }
   const obtieneUno = () =>{
    // dispatch(getPerro(2));   
     console.log('obtieneUno:');  
      dispatch(getPerro(1));
   }

  /**hago dispatch de la ejecucion de un action creator */
  const handleOrder  = (evento) => { dispatch ( orderCards(evento.target.value))  }

 const handleSearch = () => {
      console.log('raza:::',raza);
    
      dispatch(getPerro(raza));
    
 };

  return (
 <AppCont>
  <div>
   <p>SELECCION</p>
    <button onClick = { obtieneTodos }>BOTON TODOS</button>
    {/* <button onClick = { obtieneUno }>BOTON UNO</button> */}
    <select onChange= { handleOrder }>
           <option value="A">Ascendente</option>
           <option value="D">Descendente</option>
     </select>  
     <input type="search" value={raza} onChange={(e) => setRaza(e.target.value)} />
     <button onClick={handleSearch}>SEARCH REDUX</button>
  </div> 
    <Cardsredux losperros={props.perros2}  />
 </AppCont>
  )
}

 const mapStateToProps = (state) => {
  return {  perros2: state.perros2, } }
 export default connect (mapStateToProps,null) (Homeredux);

//export default Homeredux