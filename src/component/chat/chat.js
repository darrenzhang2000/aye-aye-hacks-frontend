import React, { useEffect, useState } from 'react'
import socketIOClient from "socket.io-client";

const Chat = props => {
    const [socket, setSocket] = useState("")

    // useEffect(() => {
    //     console.log('injecting socket.io script')

    //     const script = document.createElement('script');

    //     script.src = 'https://cdn.socket.io/socket.io-1.0.0.js'
    //     script.async = true

    //     document.body.appendChild(script)

    //     return () => {
    //         document.body.removeChild(script)
    //     }

    // }, [])

    useEffect(async () => {
        console.log('connecting to io')
        const ENDPOINT = 'http://localhost:5000'
        const socket = await socketIOClient(ENDPOINT);
        // socket.on("FromAPI", data => {
        //     console.log(data);
        // });

    }, [])

    useEffect(() => {
        console.log('ss', socket)


        return () => socket.disconnect()
    }, [])

    const handleOnClick = (e) => {
        e.preventDefault()
        //socket
    }

    return <div>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>WebSockets</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
                <link href="/styles.css" rel="stylesheet" />
            </head>
            <body>
                <div id='mario-chat'>
                    <div id='chat-window'>
                        <div id='output'></div>
                        <div id='feedback'></div>
                    </div>
                    <input id='handle' type='text' placeholder='Handle' />
                    <input id='message' type='text' placeholder="Message" />
                    <button id='send'>Send</button>
                </div>

                <script src="/chat.js"></script>
            </body>
        </html>
    </div>

}

export default Chat