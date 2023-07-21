import React from 'react'
import Tabs from '@/components/leftbar/LeftBar'
import Flow from '@/components/homepage/Flow'
import FollowBar from '@/components/homepage/FollowBar'

const Page = () => {
  return (
    <div>
      <div className='flex h-full justify-between '>
        <div className='flex justify-center ml-2 min-h-screen'><Tabs/></div>
        <div className='sticky'><Flow/></div>
        <div><FollowBar/></div>
      </div>
    </div>
  )
}

export default Page