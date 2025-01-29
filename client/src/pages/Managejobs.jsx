import React from 'react'
import {  manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const Managejobs = () => {

  const navigate = useNavigate();

  return (
    <div className="p-6  min-h-screen">
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left text-gray-700 font-medium">#</th>
              <th className="p-3 text-left text-gray-700 font-medium">Job Title</th>
              <th className="p-3 text-left text-gray-700 font-medium">Date</th>
              <th className="p-3 text-left text-gray-700 font-medium">Location</th>
              <th className="p-3 text-left text-gray-700 font-medium">Applicants</th>
              <th className="p-3 text-left text-gray-700 font-medium">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } border-t border-gray-200`}
              >
                <td className="p-3 text-gray-600 text-center">{index + 1}</td>
                <td className="p-3 text-gray-700">{job.title}</td>
                <td className="p-3 text-gray-600">{moment(job.date).format('ll')}</td>
                <td className="p-3 text-gray-600">{job.location}</td>
                <td className="p-3 text-gray-600 text-center">{job.applicants}</td>
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='mt-4 flex justify-end'>
        <button onClick={() => navigate('/dashboard/add-job')} className='bg-black text-white px-4 py-2 rounded font-semibold'>Add New Job</button>
      </div>
    </div>
  )
}

export default Managejobs
