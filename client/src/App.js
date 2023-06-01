import { AppCont } from './styledCompApp';
import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import FormRaza from './components/FormRaza/FormRaza2';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Landing from './components/Landing/Landing';
const url1 = 'localhost:3001/dogs/?nombreraza=';
const urlDogs = 'http://localhost:3001/dogs';

const port=3001;

function App() {
   let [ perro, seteaPerros ]  = useState([]);    
   const navigate = useNavigate();
   const { pathname } = useLocation();
   /**paginacion */
   const [ curPag, setCurPag ] = useState(1); // Página actual
   const cardsxPag = 4; // Número de tarjetas por página
   /**fin paginacion */ 
   // navigate('/home'); // Redirige a la ruta "/home" al cargar la aplicación
   function buscaCan(nombreraza) {   
    // console.log('igual entra a buscaCan()');
    axios(`http://localhost:${port}/dogs?nombreraza=${nombreraza}`)
    .then(({ data }) => {  
      const perroExistente = perro.find(e => e.id == data.id);
      console.log('buscaCan data::', data)
      if (perroExistente) { alert(" en la lista:", perroExistente);  } 
      else  { seteaPerros([...perro, data]);  }
    })
    .catch(() => { alert(nombreraza,'NO se encuentra.') })  
   }
 
   function onClose(id) {
     seteaPerros(( oldCanes) => { return oldCanes.filter((ch) => ch.id !== id);  });
   }
     const totalPages = Math.ceil(perro.length / cardsxPag);
   
   useEffect( () => {        
    const initialDogIds = [];     
    initialDogIds.forEach( (id) => { axios(`http://localhost:${port}/dogs?nombreraza=${id}`)
        .then(({ data }) => { seteaPerros( (oldPerros)  => [...oldPerros, data]); })  
        .catch((error) => {
          console.error(`Error al buscar perro ID ${id}:`, error);
        });
    });     
 
    }, [1,2]);

   const  onFiltro = async (idperro) => {
        try{ 
          const arreglo = await axios.get(`http://localhost:${port}/dogtemp/${idperro}`); 
          if (arreglo) {
           arreglo.data.forEach( (id) => { axios(`http://localhost:${port}/dogs?nombreraza=${id}`)
        .then(({ data }) => { seteaPerros( (oldPerros)  => [...oldPerros, data]); })  
        .catch((error) => {  console.error(`Error ID ${id}:`, error);  }); });  }  }
        catch(error){  console.error(error); }     
   }
   
   return (
   <AppCont >
    { pathname !== '/' 
   ? <NavBar buscaCan={ buscaCan } onFiltro={onFiltro} />
   : null }     
    { Array.from({ length: totalPages }, (_, index) => (
      <button key={index + 1} onClick = { 
       () => setCurPag(index + 1) 
       } disabled={curPag === index + 1} > {index + 1} 
      </button>
         ))}        
      
    <Routes> 
      
       <Route path="/home" element={<Cards losperros={perro} onClose={onClose} currentPage={curPag} cardsPerPage={cardsxPag} />} />
       <Route  path='/' element={ <Landing />}></Route>
       <Route path="/detail/:id" element = {<Detail />} />
       <Route path="/formraza" element = {<FormRaza />} />
       <Route path="/about" element = {<About />} />     
     </Routes>   
   </AppCont>
    );
}

export default App;
