import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import  cover  from "../image/cover.png";
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className='flex mt-10 flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
               <HeaderItem title='HOME' Icon={HomeIcon} />
               <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
               <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
               <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
               <HeaderItem title='SEARCH' Icon={SearchIcon} />
               <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <Image 
             className='object-contain'
             src={cover}
             width={150}
             height={50}
             />
        </header>
    )
}

export default Header
