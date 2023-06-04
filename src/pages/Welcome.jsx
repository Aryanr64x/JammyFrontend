import Authentication from "../components/Authentication";

const Welcome = () => {
    return (
        <div className="bg-primary h-screen text-white grid grid-cols-2 px-32">
            <div className="flex flex-col justify-center items-center">

                <div className="text-9xl">
                    JAMMY
                </div>
                <div className="text-2xl text-center mt-8">
                    Jammy is the one stop destination for your
                    friends at work to collab over something creative
                </div>

            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="w-full px-32">
                    <div className="text-3xl">
                        All Ready To Jam ?
                    </div>
                    <Authentication />
                </div>

            </div>

        </div>
    )
}

export default Welcome;