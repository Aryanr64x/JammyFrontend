import { useContext, useEffect } from "react";
import Authentication from "../components/Authentication";
import AOS from 'aos';
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

const Welcome = () => {
    useEffect(()=>{
        AOS.init({
          duration: 500
        })
      }, [])

    return (
        <div className="bg-primary h-screen text-white grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-12 md:px-24 lg:px-32">
            
            <div className="flex flex-col justify-center items-center lg:items-start ">

                <div className="text-9xl" data-aos="fade-right" >
                    JAMMY 
                </div>
                <div className="text-xl text-center lg:text-left mt-4 font-light" data-aos="fade-right" data-aos-delay="200">
                    Jammy is the one stop destination for your
                    friends to collab and publish something creative !
                </div>

            </div>
            <div className="flex flex-col justify-center items-center mt-8 lg:mt-0">
                <div className="w-full px-4 sm:px-12 md:px-24 lg:px-32">
                    <div className="text-3xl">
                        All Ready To Jam ?
                    </div>
                    <Authentication />
                </div>
                <ToastContainer theme="colored" />

            </div>


      

        </div>
    )
}

export default Welcome;