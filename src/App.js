import './App.css';
import {useEffect, useState} from "react";
import {MessForm} from "./Components/FormComponent/Form";
import {ChatList} from "./Components/ChatList/ChatList";
import ReactScrollableFeed from "react-scrollable-feed";

function App() {
    const [messages, setMessages] = useState([]);
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const getTime = () => {
        return (hour < 10 ? '0' + hour : '' + hour) + ' : ' + (min < 10 ? '0' + min : '' + min);
    }
    const robotAnswer = {
        id: `id-${Date.now()}`,
        author: 'Robot',
        text: 'Здравствуйте! Дождитесь ответа оператора!',
        time: getTime()
    }

    const getMessage = (value) => {
        if (value !== '') {
            setMessages([...messages, {id: `id-${Date.now()}`, author: 'Author', text: value, time: getTime()}])
        }
    }
    const getLastAuthor = () => {
        if (messages.length >= 1) {
            return messages[messages.length - 1].author;
        }
    }

    useEffect(() => {
        if (getLastAuthor() === 'Author') {
            const timeout = setTimeout(() => {
                setMessages([...messages, robotAnswer])
            }, 1500);
            return () => clearTimeout(timeout)
        }
    }, [messages])

    return (
        <div className="App">
            <div className="ChatL">
                <ChatList/>
            </div>
            <div className="wrap">
                <ReactScrollableFeed>
                    {messages.map(({id, author, text, time}) =>
                        <div className={'mess ' + (author === 'Author' ? 'authorText' : '')} key={id}>
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

export default App;
