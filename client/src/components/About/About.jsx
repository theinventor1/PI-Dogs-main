import React from 'react';
import developerImage from './developer.jpg';
import {AboutContainer,Cont, AboutImage,AboutDescription,AboutTitle,AboutButton} from './styled.About';
import { Link } from 'react-router-dom'; 

function About() {
  return (
   <AboutContainer>
    <Cont>
   <AboutImage src={developerImage} alt="Foto del desarrollador" />
   <AboutTitle>About me... </AboutTitle>
   <AboutDescription>Soy un desarrollador de software apasionado por crear soluciones innovadoras para problemas cotidianos.</AboutDescription>     
 <Link to='/Home'>
     <AboutButton >VOLVER</AboutButton>
 </Link>
   
 </Cont>
 </AboutContainer>
  )
}
export default About;