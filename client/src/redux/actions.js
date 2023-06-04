import axios from 'axios';
export const GET_PERROS = "GET_PERROS";
export const GET_PERRO = "GET_PERRO";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";

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
   dispatch({type:GET_PERROS, payload: perros2 });
 };
};

export const getPerro = (id) => {
 return async (dispatch) => {
   const apiData = await axios.get(`http://localhost:${port}/dogs/name?a=${id}`);
   const elperro = apiData.data;
   dispatch({type:GET_PERRO, payload: elperro });
 };
}; 

export const filterBySource = () => {
  return async (dispatch) => {
   dispatch({ type: "FILTER_BY_SOURCE"})
  }  
}


/** router.get("/dogs/:idRaza", getDogId); */