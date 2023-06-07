import { ADD_RAZ, REM_RAZ, FILT_RAZ, ORD_RAZ, ADD_TMP, REM_TMP, FILT_TMP, ORD_TMP  } from "./action-types";
import perrosx1 from './datadummy';

import { GET_PERRO,GET_PERROS, FILTER_BY_SOURCE,ORDER_BY_SOURCE } from './actions';

const initialState = {  
 perros2 : [],
 perrospostres: perrosx1, 
 tuhermana : 'nasty',
 lamagui: 'oli'
}
/**reducer es quien sabe que hacer en el estado global  */

const reducer = (state = initialState, action) => {
 switch(action.type){
  case GET_PERROS:
   console.log('GET_PERROS');
   return { ...state, perros2: action.payload  };

  case GET_PERRO:
   try{
   //console.log('GET_PERRO payload:', action.payload);
   return { ...state, perros2: action.payload }; 
   }   
   catch (error) {
    console.error(error);
   }




   case FILTER_BY_SOURCE:
    return {   }

   
   case ORDER_BY_SOURCE:
     const orderPerro = state.perros2.sort((a, b)=> {
      if(action.payload === "A") {
          if(a.name < b.name ) return -1;
          if(b.name < a.name) return 1
          return 0  }
      // DESCENDENTE
      else {
          if(a.name < b.name) return 1
          if(b.name < a.name) return - 1
          return 0  }  
    })
    return {
      ...state,
      perros2: [...orderPerro]
    }
   
  default:
   return { ...state };  /**una copia del estado */
 }
};

export default reducer