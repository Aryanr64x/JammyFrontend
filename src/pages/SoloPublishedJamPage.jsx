import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../BASE_URL";

const SoloPublishedJamPage = () => {
    const { id } = useParams();
    const [jam, setJam] = useState()
    useEffect(() => {
        getJam()
    }, [])

    const getJam = async () => {
        try {
            const resp = await axios.get(BASE_URL + '/jam/published/' + id);
            setJam(resp.data)
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <div>
            {
                (!jam) ? (<div>
                    Loading
                </div>) : (
                    <div>
                        <div className="font-borel text-5xl text-center px-32 mt-16">
                            {jam.title}
                        </div>
                        <div className="px-32 mt-8" dangerouslySetInnerHTML={{__html: jam.body}}>

                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default SoloPublishedJamPage;