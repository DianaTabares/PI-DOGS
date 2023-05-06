export const ADD_DOGS = "ADD_DOGS"

export const addDogs = (dogs) => {
    return {
        type: ADD_DOGS,
        payload: dogs,
    }
}