import React from 'react';
import { Contenedor,Btn,Img } from './styled.Landing';
import { useLocation, useNavigate } from 'react-router-dom';
import imagenlogo from './perrologo.jpg';

 function Landing() {
  const navigate = useNavigate();
  const { pathname } = useLocation();


  return (
    <div>
     <Contenedor> 
      <Img src={imagenlogo}  />
        <h1>DOGS - CLIENT - APP</h1>
        <Btn onClick={ ()=> navigate('/Home') }>PINCHA AQUI</Btn>
      </Contenedor>
    </div>
  )
}
export default Landing;