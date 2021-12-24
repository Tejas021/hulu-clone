import Thumbnail from "./Thumbnail"

const Result = ({results}) => {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap jusitfy center">
            {results.map(result=><Thumbnail key={result.id} show={result}/>)}
        </div>
    )
}

export default Result
