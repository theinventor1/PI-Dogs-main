import { ADD_RAZ, REM_RAZ, FILT_RAZ, ORD_RAZ } from "./action-types";
import { ADD_TMP, REM_TMP, FILT_TMP, ORD_TMP } from "./action-types";

const perrosaux = [];


const initialState = {
    perros2:  [{"weight":{"imperial":"6 - 13","metric":"3 - 6"},"height":{"imperial":"9 - 11.5","metric":"23 - 29"},"id":1,"name":"Palta","bred_for":"Small rodent hunting, lapdog","breed_group":"Toy","life_span":"10 - 12 years","temperament":"Stubborn, Curious, Playful, Adventurous, Active, Fun-loving","origin":"Germany, France","reference_image_id":"BJa4kxc4X","urlimagen":"https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"},
    {"weight":{"imperial":"6 - 13","metric":"3 - 6"},"height":{"imperial":"9 - 11.5","metric":"23 - 29"},"id":2,"name":"trok","bred_for":"Small rodent hunting, lapdog","breed_group":"Toy","life_span":"10 - 12 years","temperament":"Stubborn, Curious, Playful, Adventurous, Active, Fun-loving","origin":"Germany, France","reference_image_id":"BJa4kxc4X","urlimagen":"https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"},
    {"weight":{"imperial":"6 - 13","metric":"3 - 6"},"height":{"imperial":"9 - 11.5","metric":"23 - 29"},"id":3,"name":"postre3","bred_for":"Small rodent hunting, lapdog","breed_group":"Toy","life_span":"10 - 12 years","temperament":"Stubborn, Curious, Playful, Adventurous, Active, Fun-loving","origin":"Germany, France","reference_image_id":"BJa4kxc4X","urlimagen":"https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"}],
}

/**reducer es quien sabe que hacer en el estado global  */
const reducer = (state = initialState, action) => {
 console.log('Reducer es una funcion....');
 switch(action.type){
  default:
   return { ...state   }  /**una copia del estado */
 }

}

export default reducer