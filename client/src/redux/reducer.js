import { ADD_RAZ, REM_RAZ, FILT_RAZ, ORD_RAZ } from "./action-types";
import { ADD_TMP, REM_TMP, FILT_TMP, ORD_TMP } from "./action-types";
import { GET_PERROS, FILTER_BY_SOURCE } from './actions';

const perros1 = [];
const initialState = {  perros2 : perros1, }
/**reducer es quien sabe que hacer en el estado global  */

const reducer = (state = initialState, action) => {
 switch(action.type){
  case GET_PERROS:
   return { ...state, perros2: action.payload  };

   case FILTER_BY_SOURCE:
    // let perroFiltro = state.perros2.filter((perroFiltro)=> perroFiltro.name === action.payload);
    // console.log("esta es la payload",action.payload);
    // console.log("array filtrado",perroFiltro);
    // console.log("estado de  perros2",state.perros2);
   
    return { 

      }
   
  default:
   return { ...state };  /**una copia del estado */
 }
};

export default reducer