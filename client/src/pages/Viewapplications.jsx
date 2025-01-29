
import React from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'

const Viewapplications = () => {
  return (
    <div className="p-6  min-h-screen">
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left text-gray-700 font-medium">#</th>
              <th className="p-3 text-left text-gray-700 font-medium">User Name</th>
              <th className="p-3 text-left text-gray-700 font-medium max-sm:hidden">Job Title</th>
              <th className="p-3 text-left text-gray-700 font-medium max-sm:hidden">Location</th>
              <th className="p-3 text-left text-gray-700 font-medium">Resume</th>
              <th className="p-3 text-left text-gray-700 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } border-t border-gray-200`}
              >
                <td className="p-3 text-gray-600 text-center">{index + 1}</td>
                <td className="p-3 flex items-center gap-2">
                  <img
                    src={applicant.imgSrc}
                    alt={applicant.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-gray-700">{applicant.name}</span>
                </td>
                <td className="p-3 text-gray-600 max-sm:hidden">{applicant.jobTitle}</td>
                <td className="p-3 text-gray-600 max-sm:hidden">{applicant.location}</td>
                <td className="p-3">
                  <a
                    href=""
                    target="_blank"
                    className="text-blue-500 hover:underline flex items-center gap-2"
                    rel="noopener noreferrer"
                  >
                    Resume
                    <img
                      src={assets.resume_download_icon}
                      alt="Download Resume"
                      className="w-5 h-5"
                    />
                  </a>
                </td>
                <td className="p-3 relative">
                  <div className="relative inline-block text-left group">
                    <button className="action-button text-gray-700 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300">
                      ...
                    </button>
                    <div className="absolute right-0 top-0 w-32 bg-white border border-gray-200 rounded-lg shadow-md z-10 hidden group-hover:block">
                      <button className="block w-full px-4 py-2 text-left text-green-600 hover:bg-gray-100">
                        Accept
                      </button>
                      <button className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100">
                        Reject
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Viewapplications

