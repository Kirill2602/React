import {delete_message} from "../messages/actions";
import {onValue, set} from "firebase/database";
import {chatsRef, getChatMsgsRefById, getChatRefById} from "../../../servises/firebase";
// import {chatsRef, getChatMsgsRefById, getChatRefById,} from "/src/servises/firebase";

export const ADD_CHAT = 'CHATS::ADD_CHAT'
export const DELETE_CHAT = 'CHATS::DELETE_CHAT'
export const SET_CHATS = "CHATS::SET_CHATS";
// export const REMOVE_CHAT = "CHATS::REMOVE_CHAT"

export const add_chat = (newObj) => ({
    type: ADD_CHAT,
    payload: newObj
});

export const delete_chat = (id) => ({
    type: DELETE_CHAT,
    payload: id
})

export const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats,
});

export const initChatsTracking = () => (dispatch) => {
    onValue(chatsRef, (chatsSnap) => {
        const newChats = [];

        chatsSnap.forEach((snapshot) => {
            newChats.push(snapshot.val());
        });

        dispatch(setChats(newChats));
    });
};

export const addChatWithFb = (newChat) => async () => {
   await set(getChatMsgsRefById(newChat.id), {empty: true});
    await set(getChatRefById(newChat.id), newChat);
};

export const removeMessageAfterChatFb = (newChat) => async () => {
    await set(getChatRefById(newChat), null)
    await set(getChatMsgsRefById(newChat), null)
}


export const delMessAfterDelChat = (id) => (dispatch) => {
    dispatch(delete_chat(id))
    dispatch(delete_message(id))
}
