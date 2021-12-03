import * as React from 'react';
import "./chatListStyle.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {
    addChatWithFb,
    initChatsTracking,
    removeMessageAfterChatFb
} from "../store/chats/actions";
import {selectChat} from "../store/chats/selectors";
// import {onValue, set} from "firebase/database";
// import {chatsRef, getChatMsgsRefById, getChatRefById} from "../../servises/firebase";

export const ChatList = ({text}) => {
    // const [chats, setChats] = useState([])
    const dispatch = useDispatch();
    const chat = useSelector(selectChat)
    const [value, setValue] = useState('')

    useEffect(() => {
        // onValue(chatsRef, (chatsSnap)=>{
        //     //console.log(snapshot)
        //     const newChats = []
        //     chatsSnap.forEach((snapshot)=>{
        //         newChats.push(snapshot.val())
        //     })
        //     setChats(newChats)
        // })
        dispatch(initChatsTracking())
    }, [])

    const inputTextHandler = ({target: {value}}) => {
        setValue(value)
    }

    const addChatHandler = useCallback((e) => {
        e.preventDefault();
        const id = `chat${Date.now()}`
        if (value) {
            dispatch(addChatWithFb({name: value, id: id}))
            setValue('')
            //     dispatch(add_chat({id: `id${id}`, name: value}))
        }
        // set(getChatRefById(id), {id: `id${id}`, name: value})
        // set(getChatMsgsRefById(id), {empty:true})
    }, [value])

    const deleteChatHandler = useCallback(({target: {value}}) => {
        //dispatch(delMessAfterDelChat(value))
        dispatch(removeMessageAfterChatFb(value))
    }, [value, chat])

    return (
        <div className="chatListBlock">
            <h1 className="choiceChat">{text}</h1>
            <h2 className="сhatHeader">Chat List</h2>
            <ul>
                {chat.map(({id, name}) => (
                    <li key={id}>
                        <NavLink style={({isActive}) => ({color: isActive ? "yellow" : " blueviolet"})}
                                 to={`/chats/${id}`}>{name}</NavLink>
                        <button className="addBtn delete" value={id} onClick={deleteChatHandler}>Delete</button>
                    </li>
                ))}
            </ul>
            <form>
                <input value={value} onChange={inputTextHandler} placeholder='Введите название чата' type='text'/>
                <button className="addBtn" onClick={addChatHandler} type='submit'>ADD CHAT</button>
            </form>
        </div>
    )
}
