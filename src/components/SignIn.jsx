import { useContext, useRef, useState } from "react";
import { authContext } from "../contexts/AuthContextWrapper";
import { useNavigate } from "react-router-dom";
import DotLoader from 'react-spinners/DotLoader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = ({ onSignUpRequest }) => {
    const email = useRef()
    const password = useRef()
    const auth = useContext(authContext)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        const emailText = email.current.value;
        const passwordText = password.current.value;
       
        if (emailText !== "" && passwordText !== "") {
            setLoading(true)
            const isSuccess = await auth.signIn(emailText, passwordText);
            if (isSuccess) {
                navigate('/published');
            } else {
                setLoading(false)
                toast("Invalid username and password . So please try again")
            }
        }else{
            toast("Please fill in all the fields!");
        }
    }

    return (
        <div className="mt-4">
            <div>
                <div className="text-xl">
                    Email
                </div>
                <div>
                    <input ref={email} type="email" placeholder="Enter your email..." className="px-2 py-2 w-full mt-2 text-black rounded" />
                </div>
            </div>
            <div className="mt-4">
                <div className="text-xl">
                    Password
                </div>
                <div>
                    <input ref={password} type="password" placeholder="Enter your password..." className="px-2 py-2 w-full mt-2 text-black rounded" />
                </div>
            </div>
            <div className="flex justify-between  items-center mt-4 ">
                <button onClick={onSignUpRequest} className=" px-2 py-2 rounded-sm hover:shadow-black hover:shadow-sm transition-all duration-200">
                    Don't have an account ?
                </button>
                {
                    (loading) ? (<DotLoader color="#ADE4F0" size={32} />) : (<button className="text-xl px-4 py-2 bg-secondary text-primary font-semibold rounded-sm hover:opacity-75 transition-all duration-200" onClick={signIn}>
                        Sign In
                    </button>)
                }
            </div>
          
        </div>
    )
}

export default SignIn;