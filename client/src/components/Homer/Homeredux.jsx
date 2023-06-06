import Cardsredux from '../Cards/Cardsredux';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
/** importar las action que vamos a invocar */
import { getPerros, getPerro, orderCards } from '../../redux/actions';

import { AppCont } from '../../styledCompApp';
var deparray = [];

const  Homeredux = (props) => {
   const dispatch = useDispatch();   

   /**paginacion */
   const [ curPag, setCurPag ] = useState(1); // Página actual
   const cardsxPag = 6; // Número de tarjetas por página
   /**fin paginacion */ 

   useEffect( 
      () => {         
       console.log('useEffect:', props.perros2);  
       }, [] );

   // let  perros2 = useSelector(state => state.perros2); /**react-redux */ 
    console.log('perros2:', props.state)
  
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
  //const handleOrder  = (evento) => { dispatch ( orderCards(evento.target.value))  }

   
   // const totalPages = Math.ceil(perros2.length / cardsxPag);
  // const totalPages = 5;

  return (
 <AppCont>
     {/* { Array.from({ length: totalPages }, (_, index) => (
        <button key={index + 1} onClick = { 
         () => setCurPag(index + 1) 
         } disabled={curPag === index + 1} > {index + 1} 
        </button>
           ))}         */}
    <div>
      <p>SELECCION</p>
         <button onClick = { obtieneTodos }> - BOTON TODOS - </button>
         <button onClick = { obtieneUno }> - BOTON UNO - </button>
         {/* <select onChange= { handleOrder }>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
          </select>   */}
    </div> 
    <Cardsredux losperros={props.perros2} currentPage={curPag} cardsPerPage={cardsxPag}  />
 </AppCont>
  )
}
const mapStateToProps = (state) => {
 return {
  perros2: state.perros2,
 }
}
export default connect (mapStateToProps,null) (Homeredux);