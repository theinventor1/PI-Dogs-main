import React from 'react';
import { Link } from 'react-router-dom'; 
import { NavCont,NavFilter,NavLinks,NavBtn } from './styled.NavBar';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../FilterBar/FilterBar';


export default function NavBar({ buscaCan, onFiltro, onFiltroId, onFiltroPeso }) {
 return (
  <NavCont>
    <NavFilter>
       <FilterBar onFiltro={onFiltro} onFiltroId={onFiltroId} onFiltroPeso={onFiltroPeso} />
    </NavFilter>
     <NavLinks>
        <Link to='/formraza'>
           <NavBtn>Form1</NavBtn>
        </Link>       
       
        <Link to='/home'>
           <NavBtn>Home</NavBtn>
        </Link>

        {/* <Link to='/formrazaredux'>
           <NavBtn>Form2</NavBtn>
        </Link> */}

        <Link to='/homer'>
           <NavBtn>HomeR</NavBtn>
        </Link>

        <Link to='/about'>
         <NavBtn>About</NavBtn>  
        </Link>     
     </NavLinks>    
     <SearchBar buscaCan = { buscaCan }/>
  </NavCont>
 )
}
