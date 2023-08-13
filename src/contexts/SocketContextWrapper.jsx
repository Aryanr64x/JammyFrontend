import React, { useEffect, useState } from "react";
import {io} from 'socket.io-client'

export const socketContext = React.createContext();

const SocketContextWrapper = ({ children }) => {
    const [socket, setSocket] = useState(null)
    useEffect(()=>{
        const s = io('https://jammy-backend.onrender.com');
        // const s  = io('http://127.0.0.1:8000')
        setSocket(s)
    }, [])
    return (
        <socketContext.Provider value={socket}>
            {children}
        </socketContext.Provider>
    );
}


export default SocketContextWrapper;