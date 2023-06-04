import { useContext, useRef } from "react";
import { authContext } from "../contexts/AuthContextWrapper";
import { useNavigate } from "react-router-dom";

const SignUp = ({onSignInRequest}) => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordRepeat = useRef()
    const auth = useContext(authContext)
    const navigate = useNavigate();

    const signUp = async () => {

        const usernameText = username.current.value;
        const emailText = email.current.value;
        const passwordText = password.current.value;
        const passwordRepeatText = password.current.value;
        

        if (emailText !== "" && passwordText !== "" && passwordRepeatText !== "" && usernameText !== "") {
            if (passwordText === passwordRepeatText) {
                const isSuccess = await auth.signUp(usernameText, emailText, passwordText, passwordRepeatText);
                if (isSuccess) {
                    navigate('/home');
                }
            }

        }
    }

    return (
        <div className="mt-4">
            <div>
                <div className="text-xl">
                    Username:
                </div>
                <div>
                    <input ref={username} type="text" placeholder="Create an username..." className="px-2 py-2 w-full mt-2 text-black" />
                </div>
            </div>
            <div className="mt-4">
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
                    <input ref={password} type="password" placeholder="Create a strong password..." className="px-2 py-2 w-full mt-2 text-black" />
                </div>
            </div>
            <div className="mt-4">
                <div className="text-xl">
                    Password Repeat:
                </div>
                <div>
                    <input ref={passwordRepeat} type="password" placeholder="Enter the password again ..." className="px-2 py-2 w-full mt-2 text-black" />
                </div>
            </div>
            <div className="flex justify-between  items-center mt-4 ">
                <button onClick={onSignInRequest}>
                    Already have an account ?
                </button>
                <button className="text-lg" onClick={signUp}>
                    SIGN UP
                </button>
            </div>
        </div>
    )
}

export default SignUp;