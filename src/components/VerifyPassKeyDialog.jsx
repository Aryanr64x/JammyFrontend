import useVerifyPassKey from "../hooks/useVerifyPassKey";


const VerifyPasskeyDialog = ({ jam, closePassKeyDialog }) => {
   
    const [passkey, verifyPasskey] = useVerifyPassKey(jam)
    


    return <div className="h-screen w-screen bg-black bg-opacity-30 absolute top-0 left-0 flex flex-col items-center justify-center ">
        <div className="bg-white w-80 px-4 py-2">
            <div className="text-2xl">
                Enter 6 Digit Passkey:
            </div>
            <div className="mt-4">
                <input ref={passkey} type="password" className="w-full border-primary border-2 px-2 py-2" placeholder="Your passkey goes in here...." />
            </div>
            <div className="flex justify-end">
                <button onClick={verifyPasskey} className="bg-primary px-2 py-1 mt-4 mr-2 text-white">
                    Enter
                </button>
                <button onClick={() => { closePassKeyDialog() }} className="bg-primary px-2 py-1 mt-4 text-white">
                    Cancel
                </button>
            </div>
        </div>
    </div>
}

export default VerifyPasskeyDialog;