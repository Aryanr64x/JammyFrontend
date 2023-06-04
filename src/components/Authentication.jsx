import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Authentication = () => {
    const [showSignUp, setShowSignUp] = useState(false)
    return (
        <div>
            {
                (showSignUp) ? (<SignUp onSignInRequest={()=>{setShowSignUp(false)}} />) : (<SignIn onSignUpRequest={()=>{setShowSignUp(true)}} />)
            }
        </div>
    );
}

export default Authentication;