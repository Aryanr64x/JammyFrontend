import axios from "axios";
import { useContext, useRef, useState } from "react";
import { BASE_URL } from "../BASE_URL";
import { authContext } from "../contexts/AuthContextWrapper";
import { socketContext } from "../contexts/SocketContextWrapper";
import { useNavigate } from "react-router-dom";

const CreateJam = () => {

    const [dialog, setDialog] = useState(false);
    const title = useRef()
    const auth = useContext(authContext)
    const navigate = useNavigate();
    const socket = useContext(socketContext)

    const createJam = async () => {
        if (title.current.value !== "") {
            try {
                const resp = await axios.post(BASE_URL + '/jam', { title: title.current.value }, {
                    headers: {
                        Authorization: "Bearer " + auth.token
                    }
                })

                
                console.log("THIS IS PRINTED OUT")
                console.log(resp.data)
                socket.emit('join-room', {
                    jamId: resp.data.id,
                    userExists: 0,
                    isCreator: 1,
                    userId: auth.authUser.id
                });
                navigate('/jam/'+resp.data.id, {state: resp.data});
                
            } catch (e) {

                
            }



        }
    }

    return (<div className="mt-8 px-32">
        <button onClick={() => { setDialog(true) }} className="bg-primary px-4 py-2 text-lg text-white">
            + NEW JAM
        </button>

        {
            (!dialog) ? (<div></div>) : (
                <div className="absolute h-screen w-screen top-0 left-0 bg-black bg-opacity-50 flex  justify-center items-center">
                    <div className="bg-white px-2 py-2 w-1/2 rounded-sm">
                        <div className="text-3xl">
                            Create a new Jam
                        </div>
                        <div className="text-xl mt-4">
                            Jam Title:
                            <input ref={title} type="text" placeholder="Enter a jam title....." className="w-full px-2 py-2 rounded-sm border-primary border-2" />
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button onClick={() => { setDialog(false) }} className="bg-primary px-4 py-2  mr-4 text-white">
                                CANCEL
                            </button>
                            <button onClick={createJam} className="bg-primary px-4 py-2  text-white">
                                CREATE
                            </button>
                        </div>
                    </div>
                </div>
            )
        }

    </div>
    )
}

export default CreateJam;