import { useContext, useEffect, useState } from "react";
import CreateJam from "../components/CreateJam";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BASE_URL } from "../BASE_URL";
import { authContext } from "../contexts/AuthContextWrapper";
import SingleJam from "../components/SingleJam";

const LiveJamPage = () => {

    const auth = useContext(authContext)
    const [jams, setJams] = useState([])
    useEffect(() => {
        getJams()
    }, [])

    const getJams = async () => {
        const resp = await axios.get(BASE_URL + '/jam/live', {
            headers: {
                Authorization: "Bearer " + auth.token
            }
        })

        setJams(resp.data)
    }

    return <div>
        <Navbar />
        <CreateJam />
        <div className="mt-8 px-32">
            <h3 className="text-2xl">Live Jams....</h3>
        </div>
        <div className="px-32">
            {
                jams.map((jam) => {
                    return <SingleJam jam={jam} />
                })
            }
        </div>
    </div>
}

export default LiveJamPage;