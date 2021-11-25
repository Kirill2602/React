import {delete_message} from "../messages/actions";

export const ADD_CHAT = 'CHATS::ADD_CHAT'
export const DELETE_CHAT = 'CHATS::DELETE_CHAT'

export const add_chat = (newObj) => ({
    type: ADD_CHAT,
    payload: newObj
});

export const delete_chat = (id) => ({
    type: DELETE_CHAT,
    payload: id
})

export const delMessAfterDelChat = (id) => (dispatch) => {
    dispatch(delete_chat(id))
    dispatch(delete_message(id))
}