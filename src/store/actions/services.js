import * as actionTypes from './actionTypes.js';


export const addService = (service) => {
    return {
        type: actionTypes.ADD_SERVICE,
        payload: service,
    }
}

export const removeService = (service) => {
    return {
        type: actionTypes.REMOVE_SERVICE,
        payload: service,
    }
}

export const addResponses = (responses) => {
    return {
        type: actionTypes.ADD_RESPONSES,
        payload: responses,
    }
}