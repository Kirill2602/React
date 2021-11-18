import {ADD_MESSAGE} from "./actions";

const initialMessage = [];

export const messageReducer = (state = initialMessage, {type, payload}) => {
    switch (type) {
        case ADD_MESSAGE:
            return {...state, [payload.id]: state[payload.id] ? [...state[payload.id], payload] : [payload]}
        default:
            return state
    }
}