import React, { useEffect, useState } from "react";
import {io} from 'socket.io-client'

export const socketContext = React.createContext();

const SocketContextWrapper = ({ children }) => {
    const [socket, setSocket] = useState(null)
    useEffect(()=>{
        const s = io('https://jammy-backend.onrender.com');
        setSocket(s)
    }, [])
    return (
        <socketContext.Provider value={socket}>
            {children}
        </socketContext.Provider>
    );
}


export default SocketContextWrapper;