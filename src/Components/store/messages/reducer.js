import {ADD_MESSAGE, DELETE_MESSAGE} from "./actions";

const initialMessage = [];

const getStateClone = (state, payload) => {
    const newState = {...state}
    delete newState[payload]
    return newState
}

export const messageReducer = (state = initialMessage, {type, payload}) => {
    switch (type) {
        case ADD_MESSAGE:
            return {...state, [payload.id]: state[payload.id] ? [...state[payload.id], payload] : [payload]}
        case DELETE_MESSAGE:
            return getStateClone(state, payload)
        default:
            return state
    }
}