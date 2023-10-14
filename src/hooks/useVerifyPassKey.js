import { useContext, useRef } from "react";
import { BASE_URL } from "../BASE_URL";
import axios from "axios";
import { authContext } from "../contexts/AuthContextWrapper";
import { socketContext } from "../contexts/SocketContextWrapper";
import { useNavigate } from "react-router-dom";
const useVerifyPassKey = (jam) => {
    const passkey = useRef("")
    const auth = useContext(authContext)
    const socket = useContext(socketContext)
    const navigate = useNavigate()

    const verifyPasskey = async () => {
        try {
            const passkeyText = passkey.current.value;
            if (passkeyText.length === 6) {
                const resp = await axios.post(BASE_URL + '/jam/' + jam.id + '/verify', { passkey: passkeyText }, {
                    headers: {
                        Authorization: "Bearer " + auth.token
                    }
                })

                console.log(jam.contributers)

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


                    // if the user does not already exists in the jam contributer and is also not the creator then 
                    // lets make it a contributer
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


    return [passkey, verifyPasskey]
}

export default useVerifyPassKey;