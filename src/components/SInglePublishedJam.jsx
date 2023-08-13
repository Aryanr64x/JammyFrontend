import { useNavigate } from "react-router-dom";

const SinglePublishedJam = ({ jam }) => {
    const nav = useNavigate();

    return (
        <div className="mb-8 bg-slate-100 px-4 py-4 rounded-sm">
                <div className="">
                    <div onClick={()=>{
                        nav('/published/'+jam.id)
                    }} className="font-semibold text-4xl font-borel mt-4 hover:underline hover:cursor-pointer transition-all duration-300">
                        {jam.title}
                    </div>
                <div className="-mt-4 ">
                    published by <span className="font-semibold text-xl">{jam.creator.username}</span>
                </div>
                <div className="">
                    contributed by: &nbsp;
                    {
                        jam.contributers.map((user) => {
                            return <span className="mr-2 font-semibold text-xl">{user.username}, </span>
                        })
                    }
                </div>

            </div>
          
        </div>
    )
}

export default SinglePublishedJam;