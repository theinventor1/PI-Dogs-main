import React from 'react';
import { Contenedor,Btn } from './styled.Landing';
import { useLocation, useNavigate } from 'react-router-dom';

 function Landing() {
  const navigate = useNavigate();
  const { pathname } = useLocation();


  return (
    <div>
     <h1>Landing Page</h1>
     <Contenedor>
        <h1>Aqui va un LOGO</h1>
        <Btn onClick={ ()=> navigate('/Home') }>PINCHA AQUI</Btn>
      </Contenedor>
    </div>
  )
}
export default Landing;