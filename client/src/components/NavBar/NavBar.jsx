import React from 'react';
import { NavCont,NavLogo,NavLinks,Tit1,NavBtn } from './satyled.NavBar';
import SearchBar from '../SearchBar/SearchBar';


export default function NavBar({ buscaCan }) {
 return (
  <NavCont>
    <Tit1>componente NavBar</Tit1>
    <NavLogo>   LOGO   </NavLogo>
     <NavLinks>
       <NavBtn>boton onSearch()</NavBtn>
       <NavBtn>boton 2</NavBtn>
       <NavBtn>boton 3</NavBtn>     
     </NavLinks>    
     <SearchBar buscaCan={ buscaCan }/>
  </NavCont>
 )
}
