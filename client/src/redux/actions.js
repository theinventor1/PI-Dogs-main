import axios from 'axios';
export const GET_PERROS = "GET_PERROS";

export const getPerros = () => {
  return async (dispatch) => {
    const apiData = await axios.get('http://localhost:3001/compltemp/Athletic');
    const perros2 = apiData.data;
    dispatch({type:GET_PERROS, payload: perros2 });
  };
};