import React from 'react';
import Card from "../Card/Card";
import {Conx } from './styled.Cards.js';

 function Cards(props) {  
  
  /**redux estado global , disponible para los componentes que lo necesiten */
  /**redux nos entrega un un paquete de informacion en el estado global , que queda a 
   * disposicion de cualquier parte de la aplicacion que lo necesite
    EL ESTADO GLOBAL ES UN OBJETO  
    { perros :[arr de perros] }
   reducer:  el unico que puede cambiar cosas em el ESTADO GLOBAL es el reducer. 
   Cards (conteneder de card) va a estar mirando el estado global  
    */

   //const perros = useSelector(state=>state.perros2); /** mirando ... */

  /**paginacion */
  const { losperros, onClose , currentPage, cardsPerPage  } = props;
  // Calcula el índice inicial y final de las tarjetas a mostrar según la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const currentCards = losperros.slice(indexOfFirstCard, indexOfLastCard);

  // const currentCards = perros.slice(indexOfFirstCard, indexOfLastCard);

  return (  
   <Conx >
  { currentCards?.map( (perros) => {
  return (
   <Card  
     id={perros.id}
     image={perros.urlimagen}    
     name={perros.name}     
     weight={perros.weight}
     height={perros.height}
     life_span={perros.life_span}
     temperament={perros.temperament}        
     onClose={ onClose }      /** funcion anónima no va */
   />
  );
   }) }
   </Conx>    
  )
}
export default Cards;