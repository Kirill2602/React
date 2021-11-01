import './App.css';
import {useEffect, useState} from "react";
import {MessForm} from "./Components/FormComponent/Form";

function App() {
    const [messages, setMessages] = useState([]);
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const getTime = () => {
        return (hour < 10 ? '0' + hour : '' + hour) + ' : ' + (min < 10 ? '0' + min : '' + min);
    }
    const robotAnswer = {author: 'Robot', text: 'Здравствуйте! Дождитесь ответа оператора!', time: getTime()}

    const getMessage = (value) => {
        if (value !== '') {
            setMessages([...messages, {author: 'Author', text: value, time: getTime()}])
        }
    }
    const getLastAuthor = () => {
        if (messages.length >= 1) {
            return messages[messages.length - 1].author;
        }
    }

    useEffect(() => {
        if (getLastAuthor() === 'Author') {
            setTimeout(() => {
                setMessages([...messages, robotAnswer])
            }, 1500);
        }
    }, [messages])

    return (
        <div className="App">
            <header className="App-header">
                <div className="wrap">
                    {messages.map(({author, text, time}, index) =>
                        <div className={'mess ' + (author === 'Author' ? 'authorText' : '')} key={index}>
                            <h1 className="author">{author}</h1>
                            <h2 className="messText">{text}</h2>
                            <h2 className='time'>{time}</h2>
                        </div>
                    )}
                    <MessForm cb={getMessage}/>
                </div>
            </header>
        </div>
    );
}

export default App;
