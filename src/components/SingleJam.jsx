import { useContext, useRef, useState } from "react";
import { socketContext } from "../contexts/SocketContextWrapper";
import VerifyPasskeyDialog from "./VerifyPassKeyDialog";


const SingleJam = ({ jam }) => {

    const [passkeyDialog, setPasskeyDialog] = useState(false)  

    return (
        <div className="mt-4 flex justify-between  bg-slate-200 px-4 py-4 rounded-sm hover:shadow-sm hover:shadow-primary transition-all duration-500">
            <div className="text-3xl">
                {jam.title}
            </div>
            <div>
                <button onClick={() => { setPasskeyDialog(true) }} className="bg-primary px-4 py-2 text-base text-white">
                    JOIN
                </button>
                {
                    (passkeyDialog) ? (<VerifyPasskeyDialog closePassKeyDialog={()=>{setPasskeyDialog(false)}} jam = {jam} />) : (<div></div>)
                }

            </div>
        </div>)
}

export default SingleJam;