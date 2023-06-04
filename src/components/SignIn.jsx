import { useContext, useRef } from "react";
import { authContext } from "../contexts/AuthContextWrapper";
import { useNavigate } from "react-router-dom";

const SignIn = ({onSignUpRequest}) => {
    const email = useRef()
    const password = useRef()
    const auth = useContext(authContext)
    const navigate = useNavigate();

    const signIn = async()=>{
            const emailText = email.current.value;
            const passwordText = password.current.value;
            if(emailText !== "" && passwordText !== ""){
                    const isSuccess = await auth.signIn(emailText, passwordText);
                    if(isSuccess){
                        navigate('/home');
                    }
            }
    }

    return (
        <div className="mt-4">
            <div>
                <div className="text-xl">
                    Email:
                </div>
                <div>
                    <input ref={email} type="email" placeholder="Enter your email..." className="px-2 py-2 w-full mt-2 text-black " />
                </div>
            </div>
            <div className="mt-4">
                <div className="text-xl">
                    Password:
                </div>
                <div>
                    <input ref={password} type="password" placeholder="Enter your password..." className="px-2 py-2 w-full mt-2 text-black" />
                </div>
            </div>
            <div className="flex justify-between  items-center mt-4 ">
                <button onClick={onSignUpRequest}>
                    Don't have an account ?
                </button>
                <button className="text-lg " onClick={signIn}>
                    SIGN IN
                </button>
            </div>
        </div>
    )
}

export default SignIn;