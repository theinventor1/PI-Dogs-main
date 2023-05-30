import React from 'react';
import { Link } from 'react-router-dom'; 
import { NavCont,NavLogo,NavLinks,Tit1,NavBtn } from './satyled.NavBar';
import SearchBar from '../SearchBar/SearchBar';


export default function NavBar({ buscaCan }) {
 return (
  <NavCont>
    <Tit1>El NavBar</Tit1>
    <NavLogo>-LOGO-</NavLogo>
     <NavLinks>
        <Link to='/formraza'>
          <NavBtn>Razas-Ingreso</NavBtn>
        </Link>       
        <Link to='/home'>
          <NavBtn>Home</NavBtn>
        </Link>
        <Link to='/about'>
         <NavBtn>About</NavBtn>  
        </Link>     
     </NavLinks>    
     <SearchBar buscaCan={ buscaCan }/>
  </NavCont>
 )
}
