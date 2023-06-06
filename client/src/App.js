import { AppCont } from './styledCompApp';
import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import Homeredux from './components/Homer/Homeredux.jsx'
import NavBar from './components/NavBar/NavBar';
import FormRaza from './components/FormRaza/FormRaza';
import FormRazaRedux from './components/FormRaza/FormRazaredux';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Landing from './components/Landing/Landing';

const port=3001;

function App() {
   let [ perros, seteaPerros ]  = useState([]);    
   const navigate = useNavigate();
   const { pathname } = useLocation();
   /**paginacion */
   const [ curPag, setCurPag ] = useState(1); // Página actual
   const cardsxPag = 6; // Número de tarjetas por página
   /**fin paginacion */ 
  // navigate('/formraza'); // Redirige a la ruta "/home" al cargar la aplicación

   function buscaCan(idonombre) {   
     if ( idonombre != undefined ) {
      axios(`http://localhost:${port}/dogs/${idonombre}`)
      .then(({ data }) => {  
        const perroExistente = perros.find(e => e.id == data.id);
        console.log('buscaCan data::', data)
        if (perroExistente) { alert(" en la lista:", perroExistente);  } 
        else  {  
         seteaPerros([...perros, data]);  }
      })
      .catch(() => { alert(idonombre,'NO se encuentra.') })
     }    
    }
 
    function onClose(id) {
      console.log('onClose() -> App');
      seteaPerros(( oldCanes) => { return oldCanes.filter((ch) => ch.id !== id);  });
    }

    const totalPages = Math.ceil(perros.length / cardsxPag);
   
    useEffect( () => {        
     const initialDogIds = [];     
     initialDogIds.forEach( (id) => { axios(`http://localhost:${port}/dogs/${id}`)
         .then(({ data }) => { 
           seteaPerros( (aquiPerros)  => [...aquiPerros, data]);
          }).catch((error) => {
           console.error(`Error al buscar perro ID ${id}:`, error);
         });
     });     
    },[ ]);

   // const onFiltro = async (idperro) => {
   //   try{ 
   //     const arreglo = await axios.get(`http://localhost:${port}/dogtemp/${idperro}`); 
   //     if (arreglo) {
   //      arreglo.data.forEach( (id) => { axios(`http://localhost:${port}/dogs/${id}`)
   //   .then(({ data }) => { seteaPerros( (oldPerros)  => [...oldPerros, data]); })  
   //   .catch((error) => { console.error(`Error ID ${id}:`, error); }); }); } }
   //   catch(error){  console.error(error); }     
   // }


     const onFiltro = async (idperro) => {
      try{ 
        const arreglo = await axios.get(`http://localhost:${port}/dogtemp/${idperro}`); 
        if (arreglo) {
         arreglo.data.forEach( (id) => { axios(`http://localhost:${port}/dogs/${id}`)
      .then(({ data }) => { seteaPerros( (oldPerros)  => [...oldPerros, data]); })  
      .catch((error) => { console.error(`Error ID ${id}:`, error); }); }); } }
      catch(error){  console.error(error); }     
    } 

    function onFiltro2(filterValue) {
     if (filterValue === "asc") {
       const sortedPerros = [...perros].sort((a, b) => a.id - b.id);
       seteaPerros(sortedPerros);
     } else if (filterValue === "desc") {
      const sortedPerros = [...perros].sort((a, b) => b.id - a.id);
      seteaPerros(sortedPerros);
    } else {
      // Realiza otras acciones de filtrado si es necesario
    }
   }
   
  return (
  <AppCont >    
     { pathname !== '/' 
    ? <NavBar buscaCan={ buscaCan } onFiltro={onFiltro} onFiltro2={onFiltro2} />
    : null }

     { Array.from({ length: totalPages }, (_, index) => (
       <button key={index + 1} onClick = { 
        () => setCurPag(index + 1) 
        } disabled={curPag === index + 1} > {index + 1} 
       </button>
          ))}        
   <Routes> 
    <Route path='/Homer' element={ <Homeredux onClose={onClose}/>}></Route>
    <Route path="/home" element={<Cards losperros = {perros} onClose={onClose} currentPage={curPag} cardsPerPage={cardsxPag} />} />
    <Route path='/' element={ <Landing />}></Route>
    <Route path="/detail/:id" element = {<Detail />} />
    <Route path="/formraza" element = {<FormRaza />} />
    <Route path="/formrazaredux" element = {<FormRazaRedux />} />
    <Route path="/about" element = {<About />} />     
   </Routes>    
  </AppCont>
    );
}

export default App;
/** */
