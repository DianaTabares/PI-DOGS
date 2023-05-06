import { ADD_DOGS } from "./action";

const initialState = {
    dogs: [], // Mostramos todos los perros
    dogsOrigin: [], // guardamos todos los perros en el origin, siendo un back up
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_DOGS:
            if (Array.isArray(payload)) { // renderizamos todos los datos del array, verificamos todos los perros
                return {
                    ...state,
                    dogs: [...state.dogs, ...payload],
                    dogsOrigin: [...state.dogs, ...payload],
                }
            }
            return {
                ...state, dogs: [payload]
            }
        default:
            return state;
    }
}
export default reducer;