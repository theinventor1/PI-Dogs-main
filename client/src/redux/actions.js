import axios from 'axios';
export const GET_PERROS = "GET_PERROS";
export const GET_PERRO = "GET_PERRO";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const ORDER_BY_SOURCE = "ORDER_BY_SOURCE";
export const ORDER_BY_SOURCE2 = "ORDER_BY_SOURCE2";
export const AUMENTA_CONTADOR = "AUMENTA_CONTADOR";
export const OBT_USER = "OBT_USER";

const port=3001;

export const getPerros = () => {
 return async (dispatch) => {
   const apiData = await axios.get(`http://localhost:${port}/dogs`);
   const perros2 = apiData.data;
   console.log('getPerros() :',perros2,'.');
   dispatch({type:GET_PERROS, payload: perros2 });
 };
};

export const getPerro = (id) => {
 return async (dispatch) => {
   console.log('entrasi');
   const apiData = await axios.get(`http://localhost:${port}/dogs/name?a=${id}`);
   const elperro = apiData.data; /**encapsulo el objeto en corchetes asi queda en un array */
   console.log('getPerro():',elperro);
   dispatch( { type:GET_PERRO, payload: elperro } );
 };
}; 

export const getPerro2 = (id) => {
 return async (dispatch) => {
 try { 
 const response = await fetch(`http://localhost:${port}/dogs/name?a=${id}`);      
 if (response.status === 404) { throw new Error('El perro no fue encontrado'); }
     const elperro = await response.json();
     dispatch({ type: GET_PERRO, payload: elperro });
   } 
 catch (error) {
     console.error(error);
     alert('Error al obtener el perro');
   }
 };
};
export const orderCards = (order)=> {
 return {
       type: ORDER_BY_SOURCE,
       payload: order
 }
};
export const filterBySource = (name) => {
  return {
        type: "FILTER_BY_SOURCE",
        payload: name
         };
};
export const aumentarContador = () => {
   return {  type: AUMENTA_CONTADOR }
};
export const getUsers = () => {
 return function(dispatch){ 
  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => dispatch({type: OBT_USER, payload: data}))
}
}
