import React, { useEffect, useState } from "react";
import axios from "axios";
import {BASE_URL} from "../BASE_URL";
export const authContext = React.createContext();

const AuthContextWrapper = ({ children }) => {


    //TODO:custom hook extraction
    const [token, setToken] = useState(null);
    const [authUser, setAuthUser] = useState(null)


    


    const signIn = async (email, password) => {
        try {
            const resp = await axios.post(BASE_URL + '/auth/signin', {
                email, password,
            });
            console.log(resp.data.data.user)
            setToken(resp.data.data.token)
            setAuthUser(resp.data.data.user);
            return true;
        } catch (e) {
            console.log(e)
            return false;
        }

    }

    const signOut = () => {

        setToken(null)
        setAuthUser(null)
    }

    const signUp = async (username, email, password, password_repeat) => {
        try {
            const resp = await axios.post(BASE_URL + '/auth/signup', {
                username ,email, password,password_repeat
            });
            console.log(resp.data.data.user)
            setToken(resp.data.data.token)
            setAuthUser(resp.data.data.user);
            return true;
        } catch (e) {
            console.log(e)
            return false;
        }

    }


    const value = {
        signIn, signUp, authUser, token, signOut
    }

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );

}


export default AuthContextWrapper;