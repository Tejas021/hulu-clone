const HeaderItem = ({title,Icon}) => {
    return (
        <div className="text-white sm:w-15 w-12 cursor-pointer items-center group flex flex-col">
            <Icon className="h-8  group-hover:animate-bounce"/>
            <h3 className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</h3>
        </div>
    )
}

export default HeaderItem
