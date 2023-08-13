import { useContext, useRef, useState } from "react";
import { socketContext } from "../contexts/SocketContextWrapper";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/AuthContextWrapper";
import axios from "axios";
import { BASE_URL } from "../BASE_URL";

const SingleJam = ({ jam }) => {

    const socket = useContext(socketContext)

    const auth = useContext(authContext)

    const navigate = useNavigate()


    const [passkeyDialog, setPasskeyDialog] = useState(false)
    const passkey = useRef("")

    const verifyPasskey = async () => {
        try {
            const passkeyText = passkey.current.value;
            if (passkeyText.length === 6) {
                const resp = await axios.post(BASE_URL + '/jam/' + jam.id + '/verify', { passkey: passkeyText }, {
                    headers: {
                        Authorization: "Bearer " + auth.token
                    }
                })

                if (resp.data.verify === 1) {
                    let isCreator = (auth.authUser.id === jam.creator_id) ? (1) : (0);
                    console.log("is creator" + isCreator)
                    console.log("user exists " + resp.data.userExists)
                    socket.emit("join-room", {
                        jamId: jam.id,
                        userExists: resp.data.userExists,
                        isCreator: isCreator,
                        userId: auth.authUser.id
                    });

                    if (resp.data.userExists === 0 && isCreator === 0) {
                        console.log(jam.contributers)
                        jam.contributers.push(auth.authUser);
                    }
                    navigate('/jam/' + jam.id, { state: jam });
                } else {
                    console.log("INVALID PASSKEY")
                }
            } else {
                console.log("enter  a valid passkey")
            }
        } catch (e) {
            console.log(e.message)
        }
    }


    const joinJam = async () => {






    }

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
                    (passkeyDialog) ? (
                        <div className="h-screen w-screen bg-black bg-opacity-30 absolute top-0 left-0 flex flex-col items-center justify-center ">
                            <div className="bg-white w-80 px-4 py-2">
                                <div className="text-2xl">
                                    Enter 6 Digit Passkey:
                                </div>
                                <div className="mt-4">
                                    <input ref={passkey} type="password" className="w-full border-primary border-2 px-2 py-2" placeholder="Your passkey goes in here...." />
                                </div>
                                <div className="flex justify-end">
                                    <button onClick={verifyPasskey} className="bg-primary px-2 py-1 mt-4 mr-2 text-white">
                                        Enter
                                    </button>
                                    <button onClick={() => { setPasskeyDialog(false) }} className="bg-primary px-2 py-1 mt-4 text-white">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>) : (<div></div>)
                }

            </div>
        </div>)
}

export default SingleJam;