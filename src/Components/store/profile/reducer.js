import {SIGN_IN, SIGN_OUT, TOGGLE_CHECKBOX} from "./actions";

const initialState = {
    checkbox: false,
    name: 'Change text color',
    color: 'blueviolet',
    authed: false,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                checkbox: !state.checkbox,
                color: state.checkbox ? 'blueviolet' : 'yellow'
            }
        case SIGN_IN:
            return {
                ...state,
                authed: true,
            };
        case SIGN_OUT:
            return {
                ...state,
                authed: false,
            };

        default:
            return state;
    }
};