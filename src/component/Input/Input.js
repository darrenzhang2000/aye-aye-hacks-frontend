import React from "react";
import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form className="form">
            <input
                className="input"
                type="text"
                value={message}
                placeholder="Enter the message .."
                onChange={e => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'enter' ? sendMessage(e) : null}
            />
            <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input;