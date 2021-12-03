import React, {useState} from "react";
import "./home.css";
import {logIn} from "../../servises/firebase";
import {SignForm} from "../SignForm";
import {Link} from "react-router-dom";

export const Home = () => {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (email, pass) => {
        setLoading(true);
        try {
            await logIn(email, pass);
        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <h3 className="home__header">HOME</h3>
            <SignForm onSubmit={handleSignIn} error={error} loading={loading}/>
            <Link className="home__link" to="/signup">Sign Up</Link>
        </div>
    );
};