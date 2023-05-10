import { ADD_DOGS, FILTERORG, ORDERRAZE } from "./action";

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
                    dogs: payload,
                    dogsOrigin: payload,
                }
            }
            return {
                ...state, dogs: [payload]
            }
        case FILTERORG:
            let filtdog = state.dogsOrigin.filter((dog) => {
                if (payload === "api" && payload !== "reset") {
                    return dog.id <= 264
                }
                if (payload === "db" && payload !== "reset") {
                    return dog.id > 264
                }
            })
            if (payload === "reset") {
                return filtdog = state.dogsOrigin;
            }
            return {
                ...state, dogs: filtdog,
            }

        case ORDERRAZE:
            let OrderRaze = [...state.dogsOrigin].sort((a, b) => {
                if (payload === "a") {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                }
                else if (payload === "d") {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                }

            })
            return {
                ...state, dogs: OrderRaze,
            }
        default:
            return state;
    }
}
export default reducer;