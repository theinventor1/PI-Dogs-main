import React from 'react';
import Cardredux from "../Card/Cardredux";
import {Conx } from './styled.Cards.js';
import { useSelector } from 'react-redux';

 function Cardsredux(props) {  
   const perrosx = useSelector(state => state.perros2); /** mirando ... */
  /**paginacion */
   const { onClose  } = props;
  // Calcula el índice inicial y final de las tarjetas a mostrar según la página actual
  // const indexOfLastCard = currentPage * cardsPerPage;
  // const indexOfFirstCard = indexOfLastCard - cardsPerPage;  
  //const currentCards = losperros.slice(indexOfFirstCard, indexOfLastCard);
   // const currentCards = perros.slice(indexOfFirstCard, indexOfLastCard);

  return (  
   <Conx >
  { perrosx?.map( (indi) => {
  return (
   <Cardredux  
     id={indi.id}
     image={indi.urlimagen}    
     name={indi.name}     
     weight={indi.weight}
     height={indi.height}
     life_span={indi.life_span}
     temperament={indi.temperament}        
     onClose={ onClose }      /** funcion anónima no va */
   />
  );
   }) }
   </Conx>    
  )
}
export default Cardsredux;