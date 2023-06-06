import React from 'react';
import { useState } from "react";
import { SBCont, SBInput, SBBtn } from './styled.Searchbar';
function SearchBar( { buscaCan } ) {  /**aqui viene la funcion buscaCan por props */
   const [raza, setRaza]   = useState(""); /**esto estaba bien  */   
   /**handleChange () */
   function handChg (event) { 
     setRaza(event.target.value);
     console.log('handChg:',event.target.value)
   }
 return (
 <SBCont>
  <SBInput type="search" name="search" value = {raza} onChange= {handChg} />   
  <SBBtn  onClick = { () => buscaCan(raza) }>Buscar</SBBtn>  
 </SBCont>
 )
}
export default SearchBar

