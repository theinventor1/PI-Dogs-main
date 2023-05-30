import { AppCont } from './styledCompApp';
import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import FormRaza from './components/FormRaza/FormRaza2';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
const url1 = 'localhost:3001/dogs/?nombreraza=';
const port=3001;

function App() {
      let [ perro, seteaPerros ]  = useState([]) 
      const [ access, setAccess ] = useState(false);
      const navigate = useNavigate();
      const { pathname } = useLocation();
      /**paginacion */
      const [ curPag, setCurPag ] = useState(1); // Página actual
      const cardsxPag = 4; // Número de tarjetas por página
      /**fin paginacion */ 
      function buscaCan(nombreraza) {   
       axios(`http://localhost:${port}/dogs?nombreraza=${nombreraza}`)
       .then(({ data }) => {  
         const perroExistente = perro.find(e => e.id == data.id);
         if (perroExistente) {   alert("en la lista:", perroExistente);  } 
         else { seteaPerros([...perro, data]);  }
       })
       .catch(() => { alert(nombreraza,'NO se encuentra.') })  }
      /**aqui me traigo los temperamentos */
      function login(userData) { }
       // useEffect( ( ) => {  !access && navigate('/');   }, [access] )
       // useEffect(() => { navigate('/'); }, [access]);

       function onClose(id) {
        console.log('App -> onclose()')
        seteaPerros(( oldChars) => { return oldChars.filter((ch) => ch.id !== id);  });
       }
        const totalPages = Math.ceil(perro.length / cardsxPag);

        let dep = ['1','2'];

        useEffect(() => {
         // Realiza la búsqueda de los perros con los IDs 1, 2, 3, 4 al cargar la aplicación
         const initialDogIds = [1, 2, 3, 4];
     
         initialDogIds.forEach((id) => {
           axios(`http://localhost:${port}/dogs/${id}`)
             .then(({ data }) => {
               seteaPerros((oldPerros) => [...oldPerros, data]);
             })
             .catch((error) => {
               console.error(`Error al buscar el perro con ID ${id}:`, error);
             });
         });
     
         navigate('/home'); // Redirige a la ruta "/home" al cargar la aplicación
       }, []);


     return (
      <AppCont >
       { pathname !== '/' 
      ? <NavBar buscaCan={buscaCan} />
      : null }     
       { Array.from({ length: totalPages }, (_, index) => (
         <button key={index + 1} onClick = { 
          () => setCurPag(index + 1) 
          } disabled={curPag === index + 1} > {index + 1} 
         </button>
            ))}    
        <Routes> 
          <Route path="/home" element={<Cards losperros={perro} onClose={onClose} currentPage={curPag} cardsPerPage={cardsxPag} />} />
          <Route path="/detail/:id" element = {<Detail />} />
          <Route path="/formraza" element = {<FormRaza />} />
          <Route path="/about" element={<About />} />     
        </Routes>   
      </AppCont>
       );
}

export default App;
