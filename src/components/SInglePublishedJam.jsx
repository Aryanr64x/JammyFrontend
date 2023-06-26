const SinglePublishedJam = ({jam})=>{
    
    return (
        <div className="mb-8 bg-slate-100 px-4 py-4 rounded-sm">
            <div className=" flex justify-between" >
                <div className="font-semibold text-3xl">
                {jam.title}
                </div>
                <div>
                    published by <span className="font-semibold">{ jam.creator.username }</span>
                </div>
            </div>
            <div className="text-lg" dangerouslySetInnerHTML={{__html:  jam.body}}>
               
            </div>
        </div>
    )
}

export default SinglePublishedJam;