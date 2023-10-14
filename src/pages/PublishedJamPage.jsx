import { useContext, useEffect, useState } from "react";
import CreateJam from "../components/CreateJam";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BASE_URL } from "../BASE_URL";
import { authContext } from "../contexts/AuthContextWrapper";
import SingleJam from "../components/SingleJam";
import SinglePublishedJam from "../components/SInglePublishedJam";
import useJams from "../hooks/useJams";

const PublishedJam = () => {
    const auth = useContext(authContext)
    const [jams] = useJams(auth, false)
    return <div>
        <Navbar />
        <div className="mt-8 text-3xl font-bold px-32">
            Latest Published Jams
        </div>
        
        <div className="mt-4 px-32 ">
            {
                jams.map((jam) => {
                    return <SinglePublishedJam jam={jam} key={jam.id} />
                })
            }

        </div>

    </div>
}

export default PublishedJam;