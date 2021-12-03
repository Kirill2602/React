import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router";
import {selectAuth} from "../store/profile/selectors";

export const PublicOutlet = () => {
    const authed = useSelector(selectAuth);

    return !authed ? <Outlet/> : <Navigate to="/chats" replace/>;
};