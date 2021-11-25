export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

export const add_message = (newObj, answer) => ({
    type: ADD_MESSAGE,
    payload: newObj,
    answer: answer
});

export const delete_message = (id) => ({
    type: DELETE_MESSAGE,
    payload: id
});

let timeout;
export const addMessageWithReply = (newObj, answer) => (dispatch) => {
    dispatch(add_message(newObj))
    if (newObj.author === 'Author') {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            dispatch(add_message(answer))
        }, 1500)
    }
}