import React from 'react'
import { assets } from '../assets/assets'

const Appdownload = () => {
    return (
        <div className='container px-4 lg:px-20 mx-auto my-20'>

            <div className='relative bg-gradient-to-r from-violet-100 to-purple-600 p-12 sm:p-24 lg:p-32 rounded-xl'>
                <div>
                    <h1 className='text-2xl lg:text-4xl font-medium mb-4 max-w-md'>Download our Mobile App For Better Experience</h1>
                    <div className='flex gap-4'>
                        <a href="" className='inline-block'>
                            <img className='h-12'  src={assets.app_store} alt="" />
                        </a>
                        <a href="" className='inline-block'>
                        <img className='h-12' src={assets.play_store} alt="" />
                        </a>
                        
                    </div>
                    
                </div>
                <img className='absolute w-80  max-lg:hidden mr-32 right-0 bottom-0' src={assets.app_main_img} alt="" />
            </div>

            

        </div>
    )
}

export default Appdownload
