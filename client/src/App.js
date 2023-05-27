import { AppCont } from './styledCompApp';
import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
const url1 = 'localhost:3001/dogs/?nombreraza=';
const port=3001;

function App() {
  let [ perro, seteaPerros ] = useState([])

  function buscaCan(nombreraza) {   
   axios(`http://localhost:${port}/dogs?nombreraza=${nombreraza}`)
   .then(({ data }) => {  
     const perroExistente = perro.find(e => e.id == data.id);
     if (perroExistente) {   alert("en la lista:", perroExistente);  } 
     else { 
      seteaPerros([...perro, data]);
      console.log('perro length: ',perro.length,'-');   
      console.log('perro: ', perro);         
     }
   })
   .catch(() => {  alert(nombreraza,'NO se encuentra.')  })
  }

 //console.log(buscaCan('Akita'))
return (
  <AppCont >
   <NavBar  buscaCan={ buscaCan } />
      <h2>Henry Dogs-Felipe B.</h2>
      <Cards losperros = {perro} />
    
  </AppCont>
);
}

export default App;
