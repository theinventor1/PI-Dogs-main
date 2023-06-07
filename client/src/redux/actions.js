import axios from 'axios';
export const GET_PERROS = "GET_PERROS";
export const GET_PERRO = "GET_PERRO";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const ORDER_BY_SOURCE = "ORDER_BY_SOURCE";

const port=3001;

// export const getPerros = () => {
//   return async (dispatch) => {
//    const apiData = await axios.get(`http://localhost:${port}/compltemp/Athletic`);
//     const perros2 = apiData.data;
//     dispatch({type:GET_PERROS, payload: perros2 });
//   };
// };

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
   dispatch({type:GET_PERRO, payload: elperro });
 };
}; 

export const orderCards = (order)=> {
 return {
     type: ORDER_BY_SOURCE,
     payload: order
 }
}

export const filterBySource = (name) => {
  return {
           type: "FILTER_BY_SOURCE",
           payload: name
         }
}  



/** router.get("/dogs/:idRaza", getDogId); */