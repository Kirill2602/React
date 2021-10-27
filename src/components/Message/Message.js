import React from "react";
import "./messageStyle.css";

export const Message = ({message, message2}) => {
    return (
        <div>
            <h2 className="msgTxt">{message}</h2>
            <h3 className="msgTxt2">{message2}</h3>
        </div>
    );
}