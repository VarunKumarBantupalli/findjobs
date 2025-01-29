import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto py-3 gap-4 flex items-center justify-between'>
      <img src={assets.logo} alt="" />
      <p>
        copyright @findjobs.in | All rights are reserved.
      </p>
      <div className='flex gap-3 border-1 border-gray-400 max-sm:hidden pl-4'>
        <img width={38} src={assets.instagram_icon} alt="" />
        <img width={38} src={assets.twitter_icon} alt="" />
        <img width={38} src={assets.facebook_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer
