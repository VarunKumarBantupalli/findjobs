import React, { useContext } from 'react'
import { useRef } from 'react';
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Hero = () => {

   const {setSearchFilter , setIsSearched} = useContext(AppContext);

   const titleref = useRef(null);
   const locationref = useRef(null);

   const onSearch = () => {
     
    setSearchFilter({
      title: titleref.current.value,
      location : locationref.current.value
    })
    setIsSearched(true)

   }


    return (
        <div className='container 2xl:px-20 mx-auto my-10'>
            <div className='bg-gradient-to-r from-purple-700 to-purple-950 text-white text-center py-16 mx-2 rounded-xl'>
                <h2 className='text-2xl md:text-3xl  lg:text-4xl font-bold mb-4'>Over 10000+ jobs and apply</h2>
                <p className='text-sm md:text-lg  lg:text-xl  mx-auto font-light  px-5 max-w-xl mb-8'>Get notified about jobs you're interested in</p>
                <div className='flex justify-center items-center bg-white rounded-xl text-gray-600 sm:mx-auto mx-4 max-w-xl'>
                    <div className='flex  items-center'>
                        <img className='h-4 sm:h-5' src={assets.search_icon} alt="" />
                        <input className='max-sm:text-xs p-2 rounded outline-none w-full' placeholder='search for jobs' type="text"
                        ref={titleref} />
                    </div>
                    <div className='flex  items-center'>
                        <img className='h-4 sm:h-5' src={assets.location_icon} alt="" />
                        <input className='max-sm:text-xs p-2 rounded outline-none w-full' placeholder='search for location' type="text"
                        ref={locationref} />
                    </div>
                    <button onClick={onSearch} className='bg-blue-500 text-white py-2 px-6 rounded-full m-1'>Search</button>
                </div>
            </div>

            <div className='border border-gray-300 shadow-sm-mg mx-2 mt-5 p-6 rounded-md flex'>
                <div className='flex gap-10 md:gap-16 justify-center flex-wrap'>
                    <p className='font-semibold'>Trusted By</p>
                    <img className='h-6' src={assets.microsoft_logo} alt="" />
                    <img className='h-6' src={assets.walmart_logo} alt="" />
                    <img className='h-6' src={assets.accenture_logo} alt="" />
                    <img className='h-6' src={assets.samsung_logo} alt="" />
                    <img className='h-6' src={assets.amazon_logo} alt="" />
                    <img className='h-6' src={assets.adobe_logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
