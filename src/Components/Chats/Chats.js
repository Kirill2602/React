import './chats.css';
import {useEffect, useState} from "react";
import {MessForm} from "../FormComponent/Form";
import {ChatList} from "../ChatList/ChatList";
import ReactScrollableFeed from "react-scrollable-feed";
import {useParams} from "react-router-dom";
import {ChatsAnswer, getTime} from "../ChatAnswers/ChatAnswers";

function Chats() {
    const {chatId} = useParams();
    const [messages, setMessages] = useState({
        chatRobot: [],
        chatRoman: [],
        chatAmir: [],
        chatIvan: []
    });
    const getMessage = (value) => {
        if (value !== '') {
            setMessages({...messages,[chatId]:[...messages[chatId], {id: `id-${Date.now()}`, author: 'Author', text: value, time: getTime()}]})
        }
    }
    const getLastAuthor = () => {
        if (messages[chatId]?.length >= 1) {
            return messages[chatId][messages[chatId]?.length - 1].author;
        }
    }

    useEffect(() => {
        if (getLastAuthor() === 'Author') {
            const timeout = setTimeout(() => {
                setMessages({...messages,[chatId]:[...messages[chatId], ChatsAnswer[chatId][0]]})
            }, 1500);
            return () => clearTimeout(timeout)
        }
    }, [messages])


    return (
        <div className="Chats">
            <div className="ChatL">
                <ChatList/>
            </div>
            <div className="wrap">
                <ReactScrollableFeed>
                    {messages[chatId]?.map(({id, author, text, time}) =>
                        <div className={'mess ' + (author === 'Author' ? 'authorText' : '')} key={Math.random()}>
                            <h1 className="author">{author}</h1>
                            <h2 className="messText">{text}</h2>
                            <h2 className='time'>{time}</h2>
                        </div>
                    )}
                </ReactScrollableFeed>
                <MessForm getMessage={getMessage}/>
            </div>
        </div>
    );
}

export default Chats;
