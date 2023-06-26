const SinglePublishedJam = ({jam})=>{
    return (
        <div className="mb-8 bg-slate-100 px-4 py-4 rounded-sm">
            <div className="text-3xl font-semibold">
                {jam.title}
            </div>
            <div className="text-lg" dangerouslySetInnerHTML={{__html:  jam.body}}>
               
            </div>
        </div>
    )
}

export default SinglePublishedJam;