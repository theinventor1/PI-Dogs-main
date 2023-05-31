import React from 'react';
import { Link } from 'react-router-dom'; 
import { NavCont,NavLogo,NavLinks,Tit1,NavBtn } from './satyled.NavBar';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../FilterBar/FilterBar';


export default function NavBar({ buscaCan, onFiltro }) {
 return (
  <NavCont>
    <div>
     <FilterBar onFiltro = { onFiltro } />
    </div>
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
