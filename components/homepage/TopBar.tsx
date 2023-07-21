import React from 'react'
import homePageTabs from '@/data/topBar/homePageTabs'

const TopBar = () => {

  return (
    <div className={`flex flex-col md:min-w-[630px] cursor-pointer opacity-70 border`}>
      <div className='font-bold text-xl p-5'>
        Anasayfa
      </div>
      <div className='flex items-center'>
        {
          homePageTabs.map((tab, key)=>(
            <div className='flex-1 text-center p-3 hover:bg-gray-100'>{tab.title}</div>
          ))
        }
      </div>
    </div>
  )
}

export default TopBar