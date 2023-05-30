import React from 'react';
import developerImage from './developer.jpg';
import {AboutContainer,AboutImage,AboutDescription,AboutTitle,AboutButton} from './styled.About';
import { Link } from 'react-router-dom'; 

function About() {
  return (
   <AboutContainer>
   <AboutImage src={developerImage} alt="Foto del desarrollador" />
   <AboutTitle>About me... </AboutTitle>
   <AboutDescription>Soy un desarrollador de software apasionado por crear soluciones innovadoras para los problemas cotidianos.</AboutDescription>     
 <Link to='/Home'>
     <AboutButton >VOLVER</AboutButton>
 </Link>
   
 
 </AboutContainer>
  )
}
export default About;