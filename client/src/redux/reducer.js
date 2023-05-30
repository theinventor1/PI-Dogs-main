import { ADD_RAZ, REM_RAZ, FILT_RAZ, ORD_RAZ } from "./action-types";
import { ADD_TMP, REM_TMP, FILT_TMP, ORD_TMP } from "./action-types";

const initialState = {
    todoPerros:  []
}

const reducer = (state = initialState, action) => {
 console.log('Reducer....')
}

export default reducer