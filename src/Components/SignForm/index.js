import { useState } from "react";
import "../Home/home.css";

export const SignForm = ({ onSubmit, error, loading }) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleChangeEmail = ({target:{value}}) => {
        setEmail(value);
    };
    const handleChangePass = ({target:{value}}) => {
        setPass(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(email, pass);
        setEmail("");
        setPass("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className="input__sign" placeholder="Login" type="text" value={email} onChange={handleChangeEmail} />
                <input className="input__sign" placeholder="Password" type="password" value={pass} onChange={handleChangePass} />
                <input type="submit" disabled={loading} />
            </form>
            {error && <h4>{error}</h4>}
        </>
    );
};