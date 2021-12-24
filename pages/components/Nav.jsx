import request from "../utils/requests"
import { useRouter } from "next/router"

const Nav = () => {
    const router = useRouter()
    return (
        <nav className="relative">
            <div className="flex sm:px-20 px-7 text-xl scrollbar-hide sm:space-x-14 overflow-x-scroll space-x-7 whitespace-nowrap">
            {
                Object.entries(request).map(([key,{title,url}])=>(
                    <h2 
                    key={key}
                    onClick={()=>router.push(`/?genre=${key}`)}
                    className="hover:text-white active:text-red-400 cursor-pointer transition duration-100 transform hover:scale-125">{title}</h2>
                ))
            }
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"></div>
        <h1></h1>
        
        </nav>
        
    )
}

export default Nav
