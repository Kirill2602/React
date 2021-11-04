import "./form.css"
import {useState, useRef, useEffect} from "react";
import {Button} from "@mui/material";
import {FormControl} from "react-bootstrap";

export const MessForm = ({getMessage}) => {
    const [value, setValue] = useState('');
    const ref = useRef(null);
    const handleChange = ({target: {value}}) => {
        setValue(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getMessage(value);
        ref.current.focus();
        setValue('');
    }
    useEffect(() => {
        ref.current.focus();
    }, [])

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="inputs">
                <FormControl placeholder="Введите сообщение" ref={ref} value={value} onChange={handleChange} className='inp'/>
                <Button variant="contained" type='submit'>Отправить</Button>
            </div>
        </form>
    )
}