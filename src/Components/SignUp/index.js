import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../servises/firebase";
import { SignForm } from "../SignForm"
import "../Home/home.css"

export const SignUp = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignUp = async (email, pass) => {
        setLoading(true);
        try {
            await signUp(email, pass);
        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <h1 className="home__header">SIGN UP</h1>
            <SignForm onSubmit={handleSignUp} error={error} loading={loading} />
            <Link className="home__link" to="/">Sign In</Link>
        </div>
    );
};