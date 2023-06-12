import Cardsredux from '../Cards/Cardsredux';
import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
/**   importar las action que vamos a invocar   */
import { getPerros, getPerro2, orderCards, getUsers } from '../../redux/actions';
import { AppCont } from '../../styledCompApp';

const  Homeredux = (props) => {
 const [raza, setRaza]   = useState(""); /**esto estaba bien  */  
    /**paginacion */
    const [ curPag, setCurPag ] = useState(1); // Página actual
    const cardsxPag = 6; // Número de tarjetas por página
    /**fin paginacion */ 

 const dispatch = useDispatch();    


 useEffect( () => { dispatch(getPerros());  }, [] );

 const obtieneTodos = () => { dispatch( getPerros() ); }
 const handleOrder  = (evento) => { dispatch ( orderCards(evento.target.value));  }
 const handleSearch = () => { dispatch(getPerro2(raza)); };

 return (
 <AppCont>
  <div>
   <p>SELECCION</p>
    <button onClick = { obtieneTodos }>BOTON TODOS</button>
    {/* <button onClick = { obtieneUno }>BOTON UNO</button> */}
    <select onChange= { handleOrder }>
           <option value="A">Ascendente</option>
           <option value="D">Descendente</option>
     </select>  
     <input type="search" value={raza} onChange={(e) => setRaza(e.target.value)} />
     <button onClick = {handleSearch}>SEARCH REDUX</button>
  </div> 
    <Cardsredux losperros={props.perros2}  />
 </AppCont>
  )
}
 
 const mapStateToProps = (state) => {      /**mapStateToProps */
   return {  perros2: state.perros2,
             users:   state.users     } 
 }
 const mapDispatchToProps = (dispatch) => {   /**mapDispatchToProps  */
   return {  getPerro2 : () => dispatch( getPerro2() ),
             getUsers: () => dispatch(getUsers() ) }
 }

 export default connect (
   mapStateToProps,    /**  acceder al estado global */
   mapDispatchToProps, /**  despachar acciones */
   null ) (Homeredux);