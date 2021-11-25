import {REQUEST_STATUS} from "../../ChatAnswers/ChatAnswers";
import {REQUEST_USERS_FAILURE, REQUEST_USERS_LOADING, REQUEST_USERS_SUCCESS} from "./actions";

export const initialState = {
    usersList: [],
    request: {
        status: REQUEST_STATUS.IDLE,
        error: ''
    }
}

export const usersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case REQUEST_USERS_LOADING:
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST_STATUS.LOADING
                }
            }
        case REQUEST_USERS_SUCCESS:
            return {
                ...state,
                usersList: payload,
                request: {
                    error: '',
                    status: REQUEST_STATUS.SUCCESS
                }
            }
        case REQUEST_USERS_FAILURE:
            return {
                ...state,
                request: {
                    error: payload,
                    status: REQUEST_STATUS.FAILURE
                }
            }
        default: return state
    }
}