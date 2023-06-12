import React from 'react';
import Cardredux from "../Card/Cardredux";
import { Conx } from './styled.Cards.js';
import { useState, useSelector  } from 'react-redux';

 function Cardsredux(props) {  

 // const perrosx = useSelector(state => state.perros2);   /** mirando ... */

   const { losdoggies,  currentPage, cardsPerPage   } = props;
    
  // Calcula el índice inicial y final de las tarjetas a mostrar según la página actual
   const indexOfLastCard = currentPage * cardsPerPage;
   const indexOfFirstCard = indexOfLastCard - cardsPerPage;  

 
  // const currentCards = perros.slice(indexOfFirstCard, indexOfLastCard);
  // Verifica si perrosx es un objeto y conviértelo a un array
  const perrosArray = Array.isArray(losdoggies) ? losdoggies : [losdoggies];
    const currentCards = perrosArray.slice(indexOfFirstCard, indexOfLastCard);

  return (  
   <Conx >
   { currentCards.map( (indi) => {
  return (
   <Cardredux  
     id={indi.id}
     image={indi.urlimagen}    
     name={indi.name}     
     weight={indi.weight}
     height={indi.height}
     life_span={indi.life_span}
     temperament={indi.temperament}        
     /** funcion anónima no va */
   />
   );
    }) }
    </Conx>    
   )
}

export default  Cardsredux;