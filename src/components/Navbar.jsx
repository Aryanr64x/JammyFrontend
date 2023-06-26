import { useContext } from "react";
import { authContext } from "../contexts/AuthContextWrapper";
import { NavLink } from "react-router-dom";

const Navbar = ()=>{
    const auth = useContext(authContext)
    return (
        <div className="h-16 bg-primary text-white flex justify-between items-center px-32">
                <div  className="text-3xl">
                    JAMMY
                </div>
                <div className="text-lg flex items-center">

                      <div className="mr-8">
                            <NavLink to="/home" >Live Jams</NavLink>
                      </div>
                      <div className="mr-8">
                            <NavLink to="/published"> Published Jams </NavLink>
                      </div>

                      <div>
                        Hello { auth.authUser.username } !
                      </div>

                     
                </div>
        </div>
    );
}

export default Navbar;