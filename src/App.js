import './App.css';
import {Message} from "./components/Message/Message";

function App() {
    const msgText = 'React. Lesson 1';
    const msgText2 = 'Home work';
    return (
        <div className="App">
            <header className="App-header">
                <Message message={msgText} message2={msgText2}/>
            </header>
        </div>
    );
}

export default App;
