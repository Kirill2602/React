import './chats.css';
import {useEffect} from "react";
import {MessForm} from "../FormComponent/Form";
import {ChatList} from "../ChatList/ChatList";
import ReactScrollableFeed from "react-scrollable-feed";
import {Navigate, useParams} from "react-router-dom";
import {getTime} from "../ChatAnswers/ChatAnswers";
import {useDispatch, useSelector} from "react-redux";
import {add_message} from "../store/messages/actions";
import {selectMessages} from "../store/messages/selectors";

function Chats() {
    const {chatId} = useParams();
    const messages = useSelector(selectMessages)
    const name = useSelector(state => state.chats.find(({id}) => id === chatId)?.name)
    const id = useSelector(state => state.chats.find(({id}) => id === chatId)?.id)
    const dispatch = useDispatch()

    const getMessage = (value) => {
        if (value !== '') {
            dispatch(add_message({id: chatId, author: 'Author', text: value, time: getTime()}))
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
                dispatch(add_message({id: chatId, author: name, text: `Привет от ${name}`, time: getTime()}))
            }, 1500);
            return () => clearTimeout(timeout)
        }
    }, [messages])

    if (!id) {
        return <Navigate replace to="/chats"/>;
    }
    return (
        <div className="Chats">
            <div className="ChatL">
                <ChatList/>
            </div>
            <div className="wrap">
                <ReactScrollableFeed>
                    {messages[chatId]?.map(({author, text, time}) =>
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
