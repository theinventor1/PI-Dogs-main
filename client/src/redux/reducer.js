import perrosx1 from './datadummy';

import { GET_PERRO, GET_PERROS, FILTER_BY_SOURCE, ORDER_BY_NAME, ORDER_BY_PESOMIN, ORDER_BY_PESOMAX, AUMENTA_CONTADOR, OBT_USER, SET_PERROS, SET_PERROS2, TOGGLE_NAVBAR } from './actions';

const initialState = {  
 contador: 0,
 perros2 : [],
 users: [],
 user:{},
 showNavBar:false
}
/**reducer es quien sabe que hacer en el estado global  */

const reducer = (state = initialState, action) => {
 switch(action.type){
  case GET_PERROS:
   console.log('GET_PERROS');
   return { ...state, perros2: action.payload  };

  case GET_PERRO:
   console.log('GET_PERRO payload:', action.payload);
   return { ...state, perros2: action.payload } 

   

   case ORDER_BY_PESOMIN:
   const orderPerro2 = state.perros2.sort((a, b)=> {
    if(action.payload === "M") {
    if(getPesoMin(a) < getPesoMin(b) ) return -1;
    if(getPesoMin(b) < getPesoMin(a)) return 1
    return 0  }
       // DESCENDENTE
    else {
      if(getPesoMin(a) < getPesoMin(b)) return 1
      if(getPesoMin(b) < getPesoMin(a)) return - 1
     return 0  }  
      })
     return { ...state,   perros2: [...orderPerro2] }

     function getPesoMin(perro) {
      const [min] = perro.weight.metric.split(" - ");
      return parseInt(min);
    }
    

    case ORDER_BY_PESOMAX:
     const orderPerro2m = state.perros2.sort((a, b)=> {
      if(action.payload === "M") {
      if(getPesoMax(a) < getPesoMax(b) ) return -1;
      if(getPesoMax(b) < getPesoMax(a)) return 1
      return 0  }
         // DESCENDENTE
    else {
        if(getPesoMax(a) < getPesoMax(b)) return 1
        if(getPesoMax(b) < getPesoMax(a)) return - 1
       return 0  }  
        })
     return { ...state,   perros2: [...orderPerro2m] }

    function getPesoMax(perro) {
      const [, max] = perro.weight.metric.split(" - ");
      return parseInt(max);
    }



   case ORDER_BY_NAME:
     const orderPerro = state.perros2.sort( (a, b)=> {
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
    return { ...state,   perros2: [...orderPerro] }
   

    case AUMENTA_CONTADOR:
        return { ...state,  contador: state.contador + 1  }
    
    case OBT_USER:
        return { ...state, users: action.payload  }

    case SET_PERROS:
        return {  perros2: [...state, action.payload] }
    
    case SET_PERROS2:
        return { ...state,  perros2: action.payload  };

    case TOGGLE_NAVBAR:
      return {
        ...state,
        showNavBar: !state.showNavBar, // Invierte el valor de showNavBar
      };    


     default:
        return { ...state   };  /** una copia del estado */
 }
};

export default reducer