import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">

                <h1 className="heading">Group Chat </h1>
                <div><input placeholder="Your Name" className="joinInput" type="text" onChange={(e) => setName(e.target.value)} /> </div>
                <div><input placeholder="Secret Key" className="joinInput spacing" type="text" onChange={(e) => setRoom(e.target.value)} /> </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chats/chat?name=${name}&room=${room}`}>
                    <button className="button mt-29" type="submit" >Begin</button>
                </Link>

            </div>
        </div>
    )
}

export default Join;