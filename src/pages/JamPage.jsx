import { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { socketContext } from "../contexts/SocketContextWrapper";
import { authContext } from "../contexts/AuthContextWrapper";
import axios from "axios";
import { Editor } from '@tinymce/tinymce-react';
import { BASE_URL } from "../BASE_URL";

const JamPage = () => {
    const { state } = useLocation();
    const socket = useContext(socketContext);
    const auth = useContext(authContext)
    const [body, setBody] = useState("<p>Hello people of india</p>")
    const navigate = useNavigate()
    const editorRef = useRef(null)

    useEffect(() => {
        setBody(state.body);
        socket.on("tell-client", (b) => {
            console.log("The client has been recieved")
            if(b !== body){
                setBody(b);
            }
        })

    }, [])



    const save = async () => {
        try {
            const resp = await axios.put(BASE_URL + '/jam/' + state.id + '/save', { body: body }, {
                headers: {
                    Authorization: "Bearer " + auth.token
                }
            })
            console.log(resp.data)
            console.log("Your post has been saved")


        } catch (e) {

            console.log(e)
        }
    }

    const publish = async () => {
        try {
            const resp = await axios.put(BASE_URL + '/jam/' + state.id + '/publish', { body: body }, {
                headers: {
                    Authorization: "Bearer " + auth.token
                }
            })
            console.log(resp.data)
            console.log("Your post has been saved")
            navigate('/published');

        } catch (e) {

            console.log(e)
        }
    }

    return (
        <div className=" pb-8">
            <Navbar />
            <div className="px-32 text-xl mt-12">
                Hello Everyone! Welcome To
                <div className="font-bold text-5xl">
                    {state.title}
                </div>

                <div className="mt-2">
                    Jam Created By: {
                        (state.creator) ? (<span>{state.creator.username}</span>) : (<span>{auth.authUser.username}</span>)
                    }
                </div>
            </div>
            <div className="px-32 mt-2 text-lg h-full">

                {/* <textarea className="w-full h-screen border-primary border-2  rounded px-2 text-2xl" value={body} onChange={changeBody}>

                </textarea> */}

                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue={state.body}
                    value={body}
                    onEditorChange={(val, e)=>{
                        console.log("This has beeen called")
                        socket.emit('new-change', { room: state.id, body: val })
                        setBody(val)
                        }
                    }
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
            </div>
            <div className="px-32 mt-8 flex justify-end">
                {
                    (auth.authUser.id === state.creator_id) ? (<button onClick={save} className="bg-primary px-4 py-2 text-lg text-white mr-4">
                        SAVE
                    </button>) : ("")
                }
                {
                    (auth.authUser.id === state.creator_id) ? (<button onClick={publish} className="bg-primary px-4 py-2 text-lg text-white mr-4">
                        PUBLISH
                    </button>) : ("")
                }
            </div>
        </div>
    )
}

export default JamPage;