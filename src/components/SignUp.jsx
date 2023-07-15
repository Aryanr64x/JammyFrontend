import { useContext, useRef } from "react";
import { authContext } from "../contexts/AuthContextWrapper";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        const passwordRepeatText = passwordRepeat.current.value;
        

        if (emailText !== "" && passwordText !== "" && passwordRepeatText !== "" && usernameText !== "") {
            if (passwordText === passwordRepeatText) {
                const isSuccess = await auth.signUp(usernameText, emailText, passwordText, passwordRepeatText);
                if (isSuccess) {
                    navigate('/published');
                }else{
                    toast("oops!Something went wrong.  Please try again later.")
                }
            }else{
                toast("The 2 passwords dont match")
            }

        }else{
            toast("Please fill in all the fields")
        }
    }

    return (
        <div className="mt-4">
            <div>
                <div className="text-lg">
                    Username
                </div>
                <div>
                    <input ref={username} type="text" placeholder="Create an username..." className="px-2 py-2 w-full mt-2 text-black rounded" />
                </div>
            </div>
            <div className="mt-4">
                <div className="text-lg">
                    Email
                </div>
                <div>
                    <input ref={email} type="email" placeholder="Enter your email..." className="px-2 py-2 w-full mt-2 text-black rounded " />
                </div>
            </div>
            <div className="mt-4">
                <div className="text-lg">
                    Password
                </div>
                <div>
                    <input ref={password} type="password" placeholder="Create a strong password..." className="px-2 py-2 w-full mt-2 text-black rounded" />
                </div>
            </div>
            <div className="mt-4">
                <div className="text-lg">
                    Password Repeat
                </div>
                <div>
                    <input ref={passwordRepeat} type="password" placeholder="Enter the password again ..." className="px-2 py-2 w-full mt-2 text-black rounded" />
                </div>
            </div>
            <div className="flex justify-between  items-center mt-4 ">
                <button onClick={onSignInRequest} className="px-2 py-2 rounded-sm hover:shadow-black hover:shadow-sm transition-all duration-200">
                    Already have an account ?
                </button>
                <button className="text-xl px-4 py-2 bg-secondary text-primary font-semibold rounded-sm hover:opacity-75 transition-all duration-200" onClick={signUp}>
                    Sign Up
                </button>
            </div>

          
        </div>
    )
}

export default SignUp;