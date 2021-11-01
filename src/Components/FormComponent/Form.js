import "./form.css"
import {useState} from "react";

export const MessForm = ({cb}) => {
    const [value, setValue] = useState('');
    const handleChange = ({target:{value}}) => {
        setValue(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cb(value);
        console.log(value)
        setValue('');
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="inputs">
                <input placeholder="Введите сообщение" type="text" value={value} onChange={handleChange}/>
                <input value='Отправить' type="submit"/>
            </div>
        </form>
    )
}