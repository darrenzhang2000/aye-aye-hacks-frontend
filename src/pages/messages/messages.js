import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import Friends from './friends'
import Chats from './chats'
import "./messages.css"

const Messages = props => {
    // display chats if true, friends if false
    const [displayChats, setDisplayChats] = useState(true)

    return <div>
        <div className="chats-messages-buttons">
            <Button onClick={() => { setDisplayChats(true) }}>Chats</Button>
            <Button onClick={() => { setDisplayChats(false) }}>Friends</Button>
        </div>

        {displayChats ? <Chats /> : <Friends />}

    </div>
}



export default Messages