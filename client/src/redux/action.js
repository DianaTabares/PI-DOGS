export const ADD_DOGS = "ADD_DOGS";
export const FILTERORG = "FILTERORG";
export const ORDERRAZE = "ORDERRAZE";

export const addDogs = (dogs) => {
    return {
        type: ADD_DOGS,
        payload: dogs,
    }
}

export const FilterOrg = (dg) => {
    return {
        type: FILTERORG,
        payload: dg,
    }
}

export const OrderRaze = (caso) => {
    return {
        type: ORDERRAZE,
        payload: caso,
    }
}