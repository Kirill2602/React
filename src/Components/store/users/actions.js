import {url} from "../../ChatAnswers/ChatAnswers";

export const REQUEST_USERS_LOADING = 'USERS::REQUEST_USERS_LOADING'
export const REQUEST_USERS_FAILURE = 'USERS::REQUEST_USERS_FAILURE'
export const REQUEST_USERS_SUCCESS = 'USERS::REQUEST_USERS_SUCCESS'

export const getUsersLoading = () => ({
    type: REQUEST_USERS_LOADING
})
export const getUsersFailure = (err) => ({
    type: REQUEST_USERS_FAILURE,
    payload: err
})
export const getUsersSuccess = (users) => ({
    type: REQUEST_USERS_SUCCESS,
    payload: users
})

export const getUsers = () => async (dispatch) => {
    dispatch(getUsersLoading())
    try {
        const response = await fetch(url);
        console.log(response, 'response')
        if (!response.ok) {
            throw new Error('Ошибка')
        }
        const result = await response.json()
        console.log(result, 'result')
        dispatch(getUsersSuccess(result))
    } catch (err) {
        console.warn(err)
        dispatch(getUsersFailure(err.message))
    }
}

