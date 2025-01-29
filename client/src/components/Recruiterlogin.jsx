import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Recruiterlogin = () => {

    const {setShowRecruiterLogin} = useContext(AppContext)

    const [state, setState] = useState('Login')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [image, setImage] = useState(false)

    const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false)

    const onSubmitHandler = async(e) => {
         e.preventDefault()

         if(state == "Sign Up" && !isTextDataSubmitted){
            setIsTextDataSubmitted(true)
         }
    }

    useEffect(() => {

        document.body.style.overflow = "hidden"

        return () => {
         document.body.style.overflow = "unset"
        }

    }, [])
    

    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <form onSubmit={onSubmitHandler} className='relative bg-white rounded-xl p-10 text-slate-500'>
                <h1 className='text-center text-2xl text-gray-700 font-medium'>Recruiter {state}</h1>
                <p className='text-small'>Welcome back ! Please login to continue</p>

                {
                    state === 'Sign Up' && isTextDataSubmitted
                    ?
                    <>
                    <div className='text-items-center gap-4 my-10 '>
                        <label htmlFor="image">
                            <img className='w-16 rounded-full' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                            <input onChange={e => setImage(e.target.files[0])} type="file" id='image' hidden />
                        </label>
                        <p>Upload Company Logo</p>
                    </div>
                    </>
                    :
                    <>

                    {
                     state !== 'Login' &&
                     (
                     <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                         <img src={assets.person_icon} alt="" />
                         <input className='outline-none text-sm' onChange={e => setName(e.target.value)} value={name} type="text" placeholder='Company Name' required={true} />
                     </div>
                     )
                    }
                 
                     <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                         <img src={assets.email_icon} alt="" />
                         <input className='outline-none text-sm' onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='E-mail' required={true} />
                     </div>
 
                     <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5 mb-2'>
                         <img src={assets.lock_icon} alt="" />
                         <input className='outline-none text-sm' onChange={e => setPassword(e.target.value)} value={password} type="text" placeholder='password' required={true} />
                     </div>
 
                     
                 </>

                }
                {
                    state === 'Login' && <p className='text-blue-600 text-sm my-2'>forgot Password</p>
                }


                <button type='submit' className='bg-blue-600 w-full text-white px-4 py-2 rounded-xl'>
                    {state === 'Login' ? 'login' : isTextDataSubmitted ? 'Create Account.' : 'Next'}
                </button>

                {
                    state !== 'Login' &&(
                        <p className='text-center mt-5'>Already have an Account? <span className='text-blue-600 cursor-pointer'  onClick={() => setState('Login')}>Login</span> </p>
                    )
                }

                {
                    state === 'Login' && (
                        <p className='text-center mt-5'>Don't have an account ? <span  className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>Sign up</span> </p>
                    )
                }

                <img onClick={() => setShowRecruiterLogin(false)} className='absolute cursor-pointer top-5 right-5' src={assets.cross_icon} alt="" />
                

            </form>
        </div>
    )
}

export default Recruiterlogin
