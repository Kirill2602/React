export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'

export const add_message = (newObj, answer) => ({
    type: ADD_MESSAGE,
    payload: newObj,
    answer: answer
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