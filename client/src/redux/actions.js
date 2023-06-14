import axios from 'axios';
export const GET_PERROS = "GET_PERROS";
export const GET_PERRO = "GET_PERRO";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_PESO = "ORDER_BY_PESO";
export const ORDER_BY_PESOMIN = "ORDER_BY_PESOMIN";
export const ORDER_BY_PESOMAX = "ORDER_BY_PESOMAX";
export const AUMENTA_CONTADOR = "AUMENTA_CONTADOR";
export const OBT_TEMPS = "OBT_TEMPS";
export const OBT_USER  = "OBT_USER";
export const ON_FILTRO = "ON_FILTRO";
export const ON_ID     = "ON_ID";
export const ON_PESO   = "ON_PESO";
export const SET_PERROS  = "SET_PERROS";
export const SET_PERROS2 = "SET_PERROS2";
export const TOGGLE_NAVBAR="TOGGLE_NAVBAR";

const port=3001;

export const getPerrosall = () => {
 console.log('actions getPerros');
 return async (dispatch) => {
   const apiData = await axios.get(`http://localhost:${port}/dogs`);
   const perros2 = apiData.data;
   //console.log('getPerros() :',perros2,'.');
   dispatch({type:GET_PERROS, payload: perros2 });
 };
};

export const getPerro = (id) => {
 console.log('actions getPerro');
 return async (dispatch) => {
   //console.log('entrasi');
   const apiData = await axios.get(`http://localhost:${port}/dogs/${id}`);
   const elperro = apiData.data; /**encapsulo el objeto en corchetes asi queda en un array */
   //console.log('getPerro():',elperro);
   dispatch( { type:GET_PERRO, payload: elperro } );
 };
}; 

export const getPerro2 = (id) => {
 console.log('actions getPerro2');
 return async (dispatch) => {
 try { 
 const response = await fetch(`http://localhost:${port}/dogs/${id}`);      
 if (response.status === 404) { throw new Error('El perro no fue encontrado'); }
      const elperro = await response.json();
      dispatch({ type: GET_PERRO, payload: elperro });
   } 
 catch (error) {
      console.error(error);
      alert('Error al obtener el perro');
   };
 };
};

export const orderCardsName = (order)=> {
 console.log('actions orderCards:', order);
 return {
      type: ORDER_BY_NAME,
      payload: order
        };
};

export const onFiltroPesoMin = (order) => {
 console.log('actions onFiltroPesoMin:', order);
 return {
      type: ORDER_BY_PESOMIN,
      payload: order
       };
};

export const onFiltroPesoMax = (order) => {
 console.log('actions onFiltroPesoMax:', order);
 return {
      type: ORDER_BY_PESOMAX,
      payload: order
       };
};

export const filterBySource = (name) => {
 console.log('actions filterBySource');
  return {
      type: "FILTER_BY_SOURCE",
      payload: name
        };
};

export const aumentarContador = () => {
   return {    type: AUMENTA_CONTADOR    }
};

export const getTemps = () => {
 console.log('actions getTemps');
   return function(dispatch){
   fetch('http://localhost:3001/temperaments').then(response => response.json()).then(data => dispatch({type: OBT_TEMPS, payload: data}))
  }
}
export const seteaPerrosX = (perros) => {
 console.log('payload actions: ',perros,'.');
 return {   
   type: 'SET_PERROS',
   payload: perros,
 };
};

export const filtrarPerros = (idperro) => {
 return async (dispatch) => {
   try {
     console.log('actions filtrarPerros:', idperro);
     const arreglo = await axios.get(`http://localhost:${port}/dogtemp/${idperro}`);
     console.log('arreglo actions', arreglo, '.');
     if (arreglo) {
       const perrosResultantes = [];
       const promises = arreglo.data.map((id) =>
         axios(`http://localhost:${port}/dogs/${id}`)
           .then(({ data }) => {
             perrosResultantes.push(data);
           })
           .catch((error) => {
             console.error(`Error ID ${idperro}:`, error);
           })
       );
       await Promise.all(promises);
       dispatch(setPerros2(perrosResultantes));
     }
   } catch (error) {
     console.error(error);
   }
 };
};

export const setPerros2 = (perros) => {
 return {
   type: 'SET_PERROS2',
   payload: perros,
 };
};

export const onFiltroId = () => {
 return function(dispatch){
 };
};

export const toggleNavBar = () => {
 return {
   type: TOGGLE_NAVBAR,
 };
};


