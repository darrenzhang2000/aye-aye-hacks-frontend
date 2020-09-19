import React from "react";

import "./Message.css";

const Message = ({ message: { user, text }, name }) => {
    let isSentByCur = false;

    const trimName = name.trim().toLowerCase();

    if (user === trimName)
        isSentByCur = true;

    return (
        isSentByCur
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimName}</p>
                    <div className="messageBox backgroundBlue ">
                        <p className="messageText colorWhite">{text}</p>
                    </div>
                </div>
            ) :
            (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorWhite">{text}</p>
                    </div>
                    <p className="sentText pl-10">{user}</p>
                </div>
            )
    )
}

export default Message;