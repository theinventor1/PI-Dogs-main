import Cardsredux from '../Cards/Cardsredux';
import React, { useState, useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
/**   importar las action que vamos a invocar   */
import { getPerros, getPerro2, orderCards, aumentarContador,getUsers } from '../../redux/actions';
import { AppCont } from '../../styledCompApp';
 const  Homeredux = (props) => {   /** { contador } */

 console.log('reduxprops:', props ,'.');

 const [ raza, setRaza ]   = useState(""); 
    /** paginacion */
 const [ curPag, setCurPag ] = useState(1); // Página actual
 const cardsxPag = 8; // Número de tarjetas por página
    /** fin paginacion */ 

 const dispatch = useDispatch();    
 let doggystyle = [];
 useEffect( () => { dispatch(getPerros() ); 
 // dispatch(getUsers() );
 }, [ ] );
         
  const selectedData = useSelector(state => state.perros2);
  console.log('selectedData:',selectedData, 'largo:', selectedData.length, '.');

 // useEffect( () => {  dispatch(getUsers());  }, [ ] );
 // const obtieneTodos = () => { dispatch( getPerros() ); }
 
  const handleOrder  = (evento) => { dispatch ( orderCards(evento.target.value));  }
  const handleSearch = () => { dispatch(getPerro2(raza)); };

  const totalPages = Math.ceil(selectedData.length / cardsxPag);
  console.log('totalPages:',totalPages);
  // console.log('totalpages:',totalPages);
 return (
 <AppCont>
    
  <div>
  { Array.from({ length: totalPages }, (_, index) => (
       <button key={index + 1} onClick = { 
        () => setCurPag(index + 1) 
        } disabled={curPag === index + 1} > {index + 1} 
       </button>
          ))}
   
   <p>SELECCION</p>
    {/* <button onClick = { obtieneTodos }>BOTON TODOS</button> */}
    {/* <button onClick = { obtieneUno }>BOTON UNO</button> */}
    <select onChange= { handleOrder }>
           <option value="A">Ascendente</option>
           <option value="D">Descendente</option>
     </select>  

     <input type="search" value={ raza } onChange={ (e) => setRaza(e.target.value) } />
     <button onClick = { handleSearch }>SEARCH REDUX</button>
     {/* <button onClick = { props.aumentarContador }>AUMENTA CONT</button> */}    

     <h3>cont: {props.contador}</h3>

  </div> 
    <Cardsredux losdoggies = { props.perros2 } currentPage={curPag} cardsPerPage={cardsxPag} />
 </AppCont>
  )
}
 
 const mapStateToProps = (state) => {
   return {   
    perros2: state.perros2,
    contador: state.contador,
    users: state.users } 
 }
 const mapDispatchToProps = (dispatch)=>{
  return {  
    getPerro2 : () => dispatch( getPerro2() ),
    aumentarContador: () => dispatch( aumentarContador() ),
    // getUsers: () => dispatch(getUsers() )  /**la ejecutamos porque necesito el objeto que está retornando  */        

     }
 }

 export default connect ( 
    mapStateToProps,    /**recive automaticamente estado global */
    mapDispatchToProps,  /** */
   null ) (Homeredux);