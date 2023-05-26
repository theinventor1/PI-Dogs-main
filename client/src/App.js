import { AppCont } from './styledCompApp';
import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
const url1 = 'localhost:3001/dogs/?nombreraza=';

const port=3001;
function App() {
  let [ perrin, seteaPerrines ] = useState([])

  function buscaCan(nombreraza) {
   axios(`http://localhost:${port}/dogs/?nombreraza=${nombreraza}`).then(({data}) => {  
     const char = perrin?.find(e => e.nombreraza == data.nombreraza);
     if (char) {   
               alert("Perrin ya está en la lista.");
               console.log(char);  
              } 
     else { 
              seteaPerrines(perritos => [...perritos, data] );
              console.log('cagao frio ');         
             }
   })
   .catch(() => {  alert(nombreraza,' Perrin no se encuentra.')  })
  }

 //console.log(buscaCan('Akita'))
return (
  <AppCont >
   <NavBar  buscaCan={ buscaCan } />
      <h2>Henry Dogs-Felipe B.</h2>     

      <Cards perritos = {perrin} />
    
  </AppCont>
);
}

export default App;
