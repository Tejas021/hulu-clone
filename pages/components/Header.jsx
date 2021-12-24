import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
// import request from '../utils/requests'
import {SearchIcon,LightningBoltIcon,CollectionIcon,UserIcon,BadgeCheckIcon,HomeIcon} from "@heroicons/react/outline"
const Header = (props) => {
    return (
        
        <div className='flex  flex-col h-auto justify-between items-center sm:flex-row'>
          
        <div className='max-w-xl flex flex-grow justify-evenly'>
            <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
            <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
            <HeaderItem title="SEARCH" Icon={SearchIcon} />
            <HeaderItem title="PROFILE" Icon={UserIcon} />
        </div>
        
        <Image className='object-contain' alt="logo" src="https://links.papareact.com/ua6" height={100} width={200}/>
        </div>
    )
}

export default Header

