import React from 'react';
import { useState } from "react";
import { SBCont, SBInput, SBBtn } from './styled.Searchbar';

export default function SearchBar( { buscaCan } ) {

 const [raza, setRaza]   = useState(""); /**esto estaba bien  */

 /**handleChange () */
 function handChg (event) { 
   setRaza(event.target.value);
   console.log(event.target.value)
 }

return (
<SBCont>
 <SBInput type="text" name="search" value = {raza} onChange= {handChg} />
 
 <SBBtn  onClick= { () => buscaCan(raza) }>Agregar-Pers</SBBtn>

 <button onClick= { () => buscaCan('Akita') } >HOLA BOTON</button>
</SBCont>
 )
}
/*
Akita
Affenpinscher
Afghan Hound
African Hunting Dog
Akbash Dog
Cardigan Welsh Corgi
Caucasian Shepherd (Ovcharka)
Chinese Crested
Chinese Shar-Pei
Yorkshire Terrier


*/