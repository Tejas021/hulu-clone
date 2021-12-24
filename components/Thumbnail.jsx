import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'



const BASE_URL="https://image.tmdb.org/t/p/original"
function Thumbnail({show}) {
    return (
        <div className='p-2 group cursor-pointer transition-ease-in tansform sm:hover:scale-105 hover:z-50'>
           <Image alt={show.title||show.original_name} layout="responsive" height={1080} width={1920} src={`${BASE_URL}${show.backdrop_path}`}/>
        
        <div className='p-2'>
            <p className='truncate max-w-md'>{show.overview}</p>
            <h2 className='mt-1 text-2xl text-white transition-all-duration-100 ease-in-out group-hover:font-bold'>{show.title||show.original_name}</h2>
            <p className='group-hover:opacity-100  flex itmes -center opacity-0'>
                {show.media_type&& `${show.media_type} `}{" "}
                {show.release_date || show.first_air_airdate} {""}
            
            <ThumbUpIcon className='h-5 mx-2'/>{show.vote_count}
            </p>
        </div>
        </div>
    )
}

export default Thumbnail
