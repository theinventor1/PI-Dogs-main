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
import {  connect } from 'react-redux'; 

const port=3001;

function App(props) {
  
   const { showNavBar } = props;

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
        console.log('app buscaCan::', data);
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

    const onFiltro = async (idperro) => {   /**    Temperamentos   */
      try{ 
         console.log('app onFiltro:', idperro);
         const arreglo = await axios.get(`http://localhost:${port}/dogtemp/${idperro}`); 
         console.log('arreglo app',arreglo,'.');
         if (arreglo) {
         arreglo.data.forEach( (id) => { axios(`http://localhost:${port}/dogs/${id}`)
      .then(({ data }) => { seteaPerros( (oldPerros)  => [...oldPerros, data]); })  
      .catch((error) => { console.error(`Error ID ${id}:`, error); }); }); } }
      catch(error){  console.error(error); }     
    } 

    function onFiltroId(filterValue) {
     console.log('app onFiltroid');
     if (filterValue === "asc") {
       const sortedPerros = [...perros].sort((a, b) => a.id - b.id);
       seteaPerros(sortedPerros);
     } else if (filterValue === "desc") {
      const sortedPerros = [...perros].sort((a, b) => b.id - a.id);
      seteaPerros(sortedPerros);
     } else {   }
    } 
     
    function onFiltroPeso(filterPeso) {     
     if (filterPeso === "min") {
       const sortedPerros = [...perros].sort((a, b) => getPesoMin(a) - getPesoMin(b));
       seteaPerros(sortedPerros);
     } else if (filterPeso === "max") {
       const sortedPerros = [...perros].sort((a, b) => getPesoMax(b) - getPesoMax(a));
       seteaPerros(sortedPerros);
     } else {    }
    }   
     function getPesoMin(perro) {
       const [min] = perro.weight.metric.split(" - ");
       return parseInt(min);
     }
     
     function getPesoMax(perro) {
       const [, max] = perro.weight.metric.split(" - ");
       return parseInt(max);
     }

   
  return (
  <AppCont >    

     {
     pathname !== '/' 
     ?     
      showNavBar && <NavBar buscaCan={ buscaCan } onFiltro={onFiltro} onFiltroId={onFiltroId} onFiltroPeso={onFiltroPeso} /> 
     : null 
    }



     { Array.from({ length: totalPages }, (_, index) => (
       <button key={index + 1} onClick = { 
        () => setCurPag(index + 1) 
        } disabled={curPag === index + 1} > {index + 1} 
       </button>
          ))}      
          
            
  <Routes> 

   {/* <Route path='/Homer' element={<Homeredux onFiltro={onFiltro} onFiltroId={onFiltroId} onFiltroPeso={onFiltroPeso} />}></Route> */}

   <Route path='/Homer' element={<Homeredux />}></Route>

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

const mapStateToProps = (state) => {
 return {
   showNavBar: state.showNavBar, // Obtener el estado de showNavBar desde el store de Redux
 };
};

const mapDispatchToProps = (dispatch) => {
 return {  };
};

export default connect(mapStateToProps,null)(App);
