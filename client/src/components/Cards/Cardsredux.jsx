import React from 'react';
import Cardredux from "../Card/Cardredux";
import {Conx } from './styled.Cards.js';
import { useState, useSelector  } from 'react-redux';

 function Cardsredux(props) {  

  //const losperros = useSelector(state => state.perros2);   /** mirando ... */

  const { losperros, currentPage, cardsPerPage  } = props;
    
  // Calcula el índice inicial y final de las tarjetas a mostrar según la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;  

 
   //const currentCards = losperros.slice(indexOfFirstCard, indexOfLastCard);
  // Verifica si perrosx es un objeto y conviértelo a un array
    const perrosArray = Array.isArray(losperros) ? losperros : [losperros];
    const currentCards = perrosArray.slice(indexOfFirstCard, indexOfLastCard);

  return (  
   <Conx >
   { perrosArray.map( (indi) => {
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