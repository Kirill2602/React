export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'

export const add_message = (newObj) => ({
    type: ADD_MESSAGE,
    payload: newObj
});
