import * as React from 'react';
import "./chatListStyle.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {add_chat, delMessAfterDelChat} from "../store/chats/actions";
import {selectChat} from "../store/chats/selectors";

export const ChatList = ({text}) => {
    const dispatch = useDispatch();
    const chat = useSelector(selectChat)
    const [value, setValue] = useState('')

    const inputTextHandler = ({target: {value}}) => {
        setValue(value)
    }

    const addChatHandler = useCallback((e) => {
        e.preventDefault();
        const id = Math.random()
        if (value) {
            dispatch(add_chat({id: `id${id}`, name: value}))
            setValue('')
        }
    }, [dispatch, value])

    const deleteChatHandler = useCallback(({target: {value}}) => {
        dispatch(delMessAfterDelChat(value))
    }, [dispatch, value, chat])

    return (
        <div className="chatListBlock">
            <h1 className="choiceChat">{text}</h1>
            <h3 className="ChatHeader">Chat List</h3>
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
