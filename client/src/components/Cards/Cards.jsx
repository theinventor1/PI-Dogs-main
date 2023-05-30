import React from 'react';
import Card from "../Card/Card";
import {Conx } from './styled.Cards.js';
 function Cards(props) {  
  /**paginacion */
  const { losperros, onClose , currentPage, cardsPerPage  } = props;
  // Calcula el índice inicial y final de las tarjetas a mostrar según la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = losperros.slice(indexOfFirstCard, indexOfLastCard);
  return (  
   <Conx >
  { currentCards?.map( (perro) => {
  return (
   <Card
     id={perro.id}
     image={perro.urlimagen}    
     name={perro.name}
     height={perro.height.metric}
     weight={perro.weight.metric}
     life_span={perro.life_span}
     temperament={perro.temperament}        
     onClose={ onClose }      /** funcion anónima no va */
   />
  );
   }) }
   </Conx>    
  )
}
export default Cards;