import { useContext, useEffect, useState } from "react";
import CreateJam from "../components/CreateJam";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BASE_URL } from "../BASE_URL";
import { authContext } from "../contexts/AuthContextWrapper";
import SingleJam from "../components/SingleJam";
import SinglePublishedJam from "../components/SInglePublishedJam";

const PublishedJam = () => {
    const auth = useContext(authContext)
    const [jams, setJams] = useState([])
    useEffect(() => {
        getJams()
    }, [])

    const getJams = async () => {
        const resp = await axios.get(BASE_URL + '/jam/published', {
            headers: {
                Authorization: "Bearer " + auth.token
            }
        })

        setJams(resp.data)
    }
    return <div>
        <Navbar />
        <div className="mt-8 text-xl font-bold px-32">
            Latest Published Jams..
        </div>
        <div className="mt-8 px-32">
            {
                jams.map((jam) => {
                    return <SinglePublishedJam jam={jam} key={jam.id} />
                })
            }

        </div>

    </div>
}

export default PublishedJam;