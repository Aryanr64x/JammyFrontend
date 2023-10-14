import { useContext, useEffect, useState } from "react";
import CreateJam from "../components/CreateJam";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BASE_URL } from "../BASE_URL";
import { authContext } from "../contexts/AuthContextWrapper";
import SingleJam from "../components/SingleJam";
import useJams from "../hooks/useJams";

const LiveJamPage = () => {

    const auth = useContext(authContext)
    const [jams] = useJams(auth, true)

    return <div>
        <Navbar />
        <CreateJam />
        <div className="mt-8 px-32">
            <h3 className="text-2xl">Here is the list of all Live Jams</h3>
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