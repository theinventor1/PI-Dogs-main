import Cardsredux from '../Cards/Cardsredux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
/** importar las action que vamos a invocar */

import { getPerros } from '../../redux/actions';

import { AppCont } from '../../styledCompApp';
var deparray = [];

const  Homeredux = (onClose) => {
/**cuando se monta Homeredux, se dispara useEffect, 
 * useEffect hace el dispatch que ejecute getPerros()
 */
   const dispatch = useDispatch();
   /** */ 
   useEffect(() => {  
          dispatch(getPerros());
          console.log('hoy no quiero despachar')
         }, [] );

   

  return (
    <AppCont>
     <div>
       <p>ahola yo soy un parrajo</p>
     <button onClick={()=>useEffect }></button>
     </div>
     
    
       <Cardsredux />
    </AppCont>
  )
}
export default Homeredux;