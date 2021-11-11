import * as React from 'react';
import {useState} from "react";
import "./chatListStyle.css";
import {NavLink} from "react-router-dom";

export const ChatList = ({text}) => {
    const [chat, setChat] = useState([
        {
            id: 'chatRobot',
            name: 'Robot'
        },
        {
            id: 'chatRoman',
            name: 'Roman'
        },
        {
            id: 'chatAmir',
            name: 'Amir'
        },
        {
            id: 'chatIvan',
            name: 'Ivan'
        }
    ]);
    return (
        <div className="chatListBlock">
            <h1 className="choiceChat">{text}</h1>
            <h3 className="ChatHeader">Chat List</h3>
            <ul >
                {chat.map(({id, name}) => (
                    <li key={id}>
                        <NavLink style={({isActive})=> ({color: isActive?"yellow": " blueviolet"})} to={`/chats/${id}`}>{name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
