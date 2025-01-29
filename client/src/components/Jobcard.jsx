import React from 'react';
import { assets } from '../assets/assets';
import {useNavigate} from 'react-router-dom';



const Jobcard = ({ props }) => {
    
    const navigate  = useNavigate();

    return (
        <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
            {/* Company Icon */}
            <div className="flex justify-center mb-4">
                <img src={assets.company_icon} alt="Company" className="h-12 w-12" />
            </div>

            {/* Job Title */}
            <h4 className="text-xl font-semibold mb-2 text-center" >{props.title}</h4>

            {/* Location and Level */}
            <div className="flex justify-between text-gray-600 text-sm mb-4">
                <span className='py-2 px-4 bg-red-100 rounded font-medium '>{props.location}</span>
                <span className='py-2 px-4 bg-blue-100 rounded font-medium '>{props.level}</span>
            </div>

            {/* Description */}
            <p
                className="text-gray-700 text-sm mb-4"
                dangerouslySetInnerHTML={{ __html: props.description.slice(0, 150) + '...' }}>
            </p>


            {/* Buttons */}
            <div className="flex justify-between">
                <button onClick={ () => {navigate(`/apply-job/${props._id}`); scrollTo(0,0)  }}  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Apply Now
                </button>
                <button onClick={ () => {navigate(`/apply-job/${props._id}`); scrollTo(0,0)  }} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Learn More</button>
            </div>
        </div>
    );
};

export default Jobcard;
