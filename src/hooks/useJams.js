import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../BASE_URL"

const useJams = (auth, live) => {
    const [jams, setJams] = useState([])
    useEffect(() => {
        if (auth.token != null) {
            getJams()
        }
    }, [auth.token])

    const getJams = async () => {
        try {
            const resp = await axios.get(BASE_URL + '/jam/' + ((live) ? 'live' : 'published'), {
                headers: {
                    Authorization: "Bearer " + auth.token
                }
            })

            setJams(resp.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    return [jams]
}

export default useJams;