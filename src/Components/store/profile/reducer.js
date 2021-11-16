import {TOGGLE_CHECKBOX} from "./actions";

const initialState = {
    checkbox: false,
    name: 'Change text color',
    color: 'blueviolet'
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                checkbox: !state.checkbox,
                color: state.checkbox? state.color = 'blueviolet' : state.color = 'yellow'
    }
        ;
    default:
        return state;
    }
};