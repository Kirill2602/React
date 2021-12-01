import './chats.css';
import {MessForm} from "../FormComponent/Form";
import {ChatList} from "../ChatList/ChatList";
import {push} from "firebase/database"
import ReactScrollableFeed from "react-scrollable-feed";
import {Navigate, useParams} from "react-router-dom";
import {getTime} from "../ChatAnswers/ChatAnswers";
// import {useDispatch, useSelector} from "react-redux";
// import {addMessageWithReply} from "../store/messages/actions";
// import {selectMessages} from "../store/messages/selectors";
import {getChatMsgsListRefById} from "../../servises/firebase";

function Chats(msgs) {
    const {chatId} = useParams();
    // const messages = useSelector(selectMessages)
    // const name = useSelector(state => state.chats.find(({id}) => id === chatId)?.name)
    // const id = useSelector(state => state.chats.find(({id}) => id === chatId)?.id)
    // const dispatch = useDispatch()

    const getMessage = (value) => {
        if (value !== '') {
            push(getChatMsgsListRefById(chatId), {id: chatId, author: 'Author', text: value, time: getTime()} )
            // dispatch(addMessageWithReply(
            //     {id: chatId, author: 'Author', text: value, time: getTime()},
            //     {id: chatId, author: 'Author', text: value, time: getTime()},))
        }
    }

    if (!msgs.msgs[chatId]) {
        return <Navigate replace to="/chats"/>;
    }
    return (
        <div className="Chats">
            <div className="ChatL">
                <ChatList/>
            </div>
            <div className="wrap">
                <ReactScrollableFeed>
                    {msgs.msgs[chatId]?.map(({author, text, time}) =>
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
