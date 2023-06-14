import Cardsredux from '../Cards/Cardsredux';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux'; 
import { getPerrosall, getPerro2, orderCardsName, onFiltroPesoMin, onFiltroPesoMax,aumentarContador,filtrarPerros, toggleNavBar } from '../../redux/actions';
import { AppCont, Cont, Conx } from '../../styledCompApp';
const urltemps = 'http://localhost:3001/temperaments';
const  Homeredux = (props) => {   /** { contador } */
 
const { showNavBar, toggleNavBar } = props;
let {  } = props;
 //console.log('reduxprops:', props ,'.');

 const [ raza, setRaza ]   = useState(""); 
    /** paginacion */
 const [ curPag, setCurPag ] = useState(1); // Página actual
 const cardsxPag = 8; // Número de tarjetas por página
    /** fin paginacion */ 

const [ temperaments, setTemperaments ] = useState(''); 
const [ temperamentOptions, setTemperamentOptions ] = useState([]);    
const [ isLoading, setIsLoading ] = useState(false);

const dispatch = useDispatch();    

 useEffect( () => { dispatch( getPerrosall() ); 
 // dispatch(getUsers() );
 }, [ ] );

  const llenaTemperaments = async () => {
  try {
    setIsLoading(true);
    const response = await axios.get(urltemps);
    const temps = response.data;
    setTemperamentOptions(temps);
    setIsLoading(false);
  } catch (error) {
    console.error(error);
    setIsLoading(false);
  }
};
useEffect( () => {   llenaTemperaments();   }, []);    

  const selectedData = useSelector(state => state.perros2);
 // console.log('selectedData:',selectedData, 'largo:', selectedData.length, '.'); 

  const handleOrder    = (evento) => { dispatch ( orderCardsName(evento.target.value));  };
  const handlePesoMin  = (evento) => { dispatch ( onFiltroPesoMin(evento.target.value));  };
  const handlePesoMax  = (evento) => { dispatch ( onFiltroPesoMax(evento.target.value));  };

  const desapaRece = () => { toggleNavBar(); }   

  const handleSearch = () => { dispatch(getPerro2(raza)); };  
  /**aqui debo despachar la accion filtrarPerros()  */
  const handleOnFiltro = (untemperament) => {  dispatch ( filtrarPerros(untemperament)) };
  const totalPages = Math.ceil(selectedData.length / cardsxPag);  /**Total de paginas  */
 // console.log('totalPages:',totalPages);
  const handleTemperamentChange = (event) => {  setTemperaments(event.target.value);  };  /** ojo  */

 return (
 <AppCont>     
    { Array.from({ length: totalPages }, (_, index) => (
       <button key={index + 1} onClick = { 
        () => setCurPag(index + 1) 
        } disabled={curPag === index + 1} > {index + 1} 
       </button>
          ))}   
  <Conx>        
    <Cont>        
        { selectedData.length > 2 
         ?  <select onChange= { handleOrder } >
                <option value="A">Nombre Asc</option>
                <option value="D">Nombre Desc</option>
          </select> 
          : null }
    </Cont>
    <Cont>        
        { selectedData.length > 2 
         ?  <select onChange= { handlePesoMin } >
                <option value="M">Peso min ASC</option>
                <option value="X">Peso min DESC</option>
          </select> 
          : null }
    </Cont>
    <Cont>        
        { selectedData.length > 2 
         ?  <select onChange= { handlePesoMax } >
                <option value="M">Peso max ASC</option>
                <option value="X">Peso max DESC</option>
          </select> 
          : null }
    </Cont>
    <Cont>
        {/* <input type="search" value={ raza } onChange={ (e) => setRaza(e.target.value) } /> */}

        <input type="search" value={raza} onChange={e => setRaza(e.target.value)} style={{ width: '110px' }}/>
        <button onClick = { handleSearch }>SEARCH</button>
    </Cont>
    <Cont>   
        <select value={temperaments} onChange={handleTemperamentChange} >
          <option value="">Seleccion</option>
          {temperamentOptions.map((temperamento) => (
            <option key={temperamento.idtemp} value={temperamento.nombret}>
              {temperamento.nombret}
            </option>
          ))}
        </select>
        <button onClick={  () => handleOnFiltro(temperaments)   }>BuscaTT</button>
    </Cont>

    <Cont>
     <button onClick={desapaRece}>REDUX</button>
    </Cont>


</Conx>

    <Cardsredux losdoggies = { props.perros2 } currentPage={curPag} cardsPerPage={cardsxPag} />
 </AppCont>
  )
} 

 const mapStateToProps = (state) => {
   return {   
    perros2: state.perros2,
    contador: state.contador,
    users: state.users,
    showNavBar: state.showNavBar, // Obtener el estado de showNavBar desde el store de Redux
   } 
 }
 const mapDispatchToProps = (dispatch)=>{
 return {  
  getPerro2 : () => dispatch( getPerro2() ),
  aumentarContador: () => dispatch( aumentarContador() ),
  toggleNavBar: () => dispatch( toggleNavBar() ), // Mapea la acción toggleNavBar a props , debe ser importada ademas desde import

  }
}

 export default connect ( 
    mapStateToProps,    /**recive automaticamente estado global */
    mapDispatchToProps,  /** */
   null ) (Homeredux);