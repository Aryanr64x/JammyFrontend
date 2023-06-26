import { useContext } from "react";
import { socketContext } from "../contexts/SocketContextWrapper";
import { useNavigate } from "react-router-dom";

const SingleJam = ({jam})=>{
    const socket = useContext(socketContext)
    const navigate = useNavigate()
    const joinJam = async ()=>{
        socket.emit("join-room", jam.id);
        navigate('/jam/'+jam.id, {state: jam});

    }

    return (<div className="mt-4 flex justify-between text-3xl bg-slate-200 px-4 py-4 rounded-sm">
        <div>
            {jam.title}
        </div>
        <div>
        <button onClick={joinJam} className="bg-primary px-4 py-2 text-base text-white">
           JOIN
        </button>

        </div>
    </div>)
}

export default SingleJam;