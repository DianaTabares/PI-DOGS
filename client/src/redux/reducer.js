import { PREV_PAGE, NEXT_PAGE, ADD_DOGS, HANDLE_NUMBER, RESET_DOGS, ORDER_ALPHABETHYCALLY, ORDER_WEIGHT, FILTER_CREATED, NEW_DOG, ADD_TEMPERAMENTS, FILTER_TEMPERAMENT, SEARCH_DOGS, FILTER_BREED } from "./action";

const initialState = {
    numPage: 1,
    dogs: [],
    dogsOrigin: [],
    temperaments: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case HANDLE_NUMBER:
            return {
                ...state,
                numPage: payload
            }
        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1
            }
        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1
            }
        case ADD_DOGS:
            return {
                ...state,
                dogs: [...state.dogs, ...payload],
                dogsOrigin: [...state.dogs, ...payload],
            }
        case SEARCH_DOGS:
            return {
                ...state,
                dogs: payload
            }
        case ADD_TEMPERAMENTS: // agregamos los temperamentos
            return {
                ...state,
                temperaments: [...state.temperaments, ...payload]
            }
        case RESET_DOGS:
            return {
                ...state,
                dogs: state.dogsOrigin
            }
        case ORDER_ALPHABETHYCALLY:
            const sortedDogs = state.dogs.sort((a, b) => {
                const nameA = a.name.toUpperCase()
                const nameB = b.name.toUpperCase()
                if (nameA > nameB) {
                    return "Asc" === payload ? 1 : -1;
                }
                if (nameA < nameB) {
                    return "Desc" === payload ? 1 : -1;
                }
                return 0
            })
            return {
                ...state,
                dogs: sortedDogs
            }
        case ORDER_WEIGHT:
            const sortedWDogs = state.dogs.sort((a, b) => {
                const weightA = Math.round(Number(a.weight.split("-").map(t => t.trim())[a.weight.split("-").length - 1]))
                const weightB = Math.round(Number(b.weight.split("-").map(t => t.trim())[b.weight.split("-").length - 1]))
                if (weightA > weightB) {
                    return "Asc" === payload ? 1 : -1;
                }
                if (weightA < weightB) {
                    return "Desc" === payload ? 1 : -1;
                }
                return 0
            })
            return {
                ...state,
                dogs: sortedWDogs
            }
        case FILTER_BREED:
            const filterBreed = state.dogsOrigin.filter((d) => d.breedgroup === payload)
            return {
                ...state,
                dogs: filterBreed
            }
        case FILTER_CREATED:
            return {
                ...state,
                dogs: payload === "Created" ? state.dogsOrigin.filter((d) => d.hasOwnProperty("created")) : state.dogsOrigin.filter((d) => !d.hasOwnProperty("created"))
            }
        case FILTER_TEMPERAMENT:
            const filterTemp = state.dogsOrigin.filter(d => d.temperaments?.includes(payload))
            return {
                ...state,
                dogs: filterTemp
            }
        case NEW_DOG: // agregamos al perro desde el formulario
            if (typeof payload === "object") {
                return {
                    ...state,
                    dogs: [...state.dogs, payload],
                    dogsOrigin: [...state.dogsOrigin, payload]
                }
            } else {
                return state
            }
        default:
            return state
    }
}

export default reducer;