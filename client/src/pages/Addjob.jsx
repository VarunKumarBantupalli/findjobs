import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import { JobCategories  ,JobLocations , } from '../assets/assets'

const Addjob = () => {

    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('Bangalore')
    const [cateogry, setCateogry] = useState('programming')
    const [level, setLevel] = useState('Beginner Level')
    const [salary, setsalary] = useState(0)

    const editorRef = useRef(null)
    const quillRef = useRef(null)

    useEffect(() => {
      //initiate quill one time

      if(!quillRef.current && editorRef.current){
        quillRef.current = new Quill(editorRef.current , {
            theme : 'snow',
        })
      }
    

    }, [])
    

    return (
        <form className='container p-4 flex flex-col gap-e items-start' action="">

            <div className='w-full'>
                <p className='mb-2'>
                  Job Title  
                </p>
                <input className='w-full max-w-lg px-2 py-2 border-2 border-gray-300 rounded' onChange={(e) => setTitle(e.target.value)} type='text' placeholder="type here"  value={title} required/>
            </div>

            <div className='w-full max-w-lg'>
                <p className='my-2'>Job Description</p>
                <div ref={editorRef}>
                
                </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>     

            
                  <div >
                    <p className='mb-2'>Job Cateogry</p>
                    <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setCateogry(e.target.value)}>
                        {
                            JobCategories.map((cateogry,index)=>(
                                <option key={index} value={cateogry}>{cateogry}</option>
                            ))
                        }
                    </select>
                  </div>
            

            <div>
                  <div>
                    <p className='mb-2'>Job Location</p>
                    <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLocation(e.target.value)}>
                        {
                            JobLocations.map((location,index)=>(
                                <option key={index} value={location}>{location}</option>
                            ))
                        }
                    </select>
                  </div>
            </div>

            <div>
                  <div>
                    <p className='mb-2'>Job Level</p>
                    <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLevel(e.target.value)}>
                            
                           <option value="Beginner Level">Beginner Level</option>
                           <option value="Intermediate Level">Intermediate Level</option>
                           <option value="senior Level">Senior Level</option>

                    </select>
                  </div>
            </div>

            <div>
                <p className='mb-2'>Salary</p>
                <input min={0} className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setsalary(e.target.value)} type="Number" placeholder='2500' id="" />
            </div>

            </div>

                <button className=' my-4 px-4 py-2 border-2 border-blue-500 rounded-xl bg-blue-100 text-black'>Add</button>

        </form>
    )
}

export default Addjob
