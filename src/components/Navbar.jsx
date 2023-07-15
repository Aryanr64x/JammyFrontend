import { useContext } from "react";
import { authContext } from "../contexts/AuthContextWrapper";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const auth = useContext(authContext)
    const navigate = useNavigate()
    const signOut = () => {
        auth.signOut();
        navigate('/')
    }

    return (
        <div className="h-16 bg-primary text-white flex justify-between items-center px-32">
            <div className="text-3xl ">
                JAMMY
            </div>
            <div className="text-lg lg:flex items-center hidden ">
                <div className="mr-8">
                    Hello
                    {(auth.authUser) ? (<span className="ml-2">{auth.authUser.username}</span>) : ("")}
                    !
                </div>
                <div className="mr-8">
                    <NavLink to="/live" >Live Jams</NavLink>
                </div>
                <div className="mr-8">
                    <NavLink to="/published"> Published Jams </NavLink>
                </div>

                <div className="mr-8" >
                    <div className="hover:cursor-pointer" onClick={signOut}>
                        <svg className="h-4 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" /></svg>
                    </div>
                </div>




            </div>
        </div>
    );
}

export default Navbar;