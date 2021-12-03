import {chats} from "../../../ChatAnswers/ChatAnswers";
import {add_chat, delete_chat} from "../actions";
import {chatsReducer} from "../reducer";

describe('Chats tests', () => {
    it('Chat should be added new ID', () => {
        let action = add_chat({id: `newId123`, name: 'Kirill'})
        let state = chats
        let newState = chatsReducer(state, action)
        expect(newState[newState.length - 1].id).toBe('newId123')
    })
    it('Chat should be added new name', () => {
        let action = add_chat({id: `newId123`, name: 'Kirill'})
        let state = chats
        let newState = chatsReducer(state, action)
        expect(newState[newState.length - 1].name).toBe('Kirill')
    })

    it('Delete chat', () => {
        let state = chats
        let action = delete_chat('chatRobot')
        let newState = chatsReducer(state, action)
        expect(newState[0].id).not.toBe('chatRobot')
    })
})

