import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { assets, JobCategories, JobLocations } from '../assets/assets';
import Jobcard from './Jobcard';

const Joblisting = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);

  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // Handle Category Selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  // Handle Location Selection
  const handleLocationChange = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location) ? prev.filter((c) => c !== location) : [...prev, location]
    );
  };

  // Filtering Logic
  useEffect(() => {
    const matchesCategory = (job) =>
      selectedCategories.length === 0 || selectedCategories.includes(job.category);

    const matchesLocation = (job) =>
      selectedLocations.length === 0 || selectedLocations.includes(job.location);

    const matchesTitle = (job) =>
      searchFilter.title === '' || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

    const matchesSearchLocation = (job) =>
      searchFilter.location === '' ||
      job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilteredJobs = jobs
      .slice()
      .reverse()
      .filter((job) => matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job));

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1);
  }, [jobs, selectedCategories, selectedLocations, searchFilter]);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* Sidebar */}
      <div className="sidebar w-full lg:w-1/4 bg-white px-4 py-2">
        {/* Current Search */}
        {isSearched && (searchFilter.title !== '' || searchFilter.location !== '') ? (
          <div>
            <h2 className="text-lg font-medium mb-4">Current Search</h2>
            <div className="text-gray-600 mb-4">
              {searchFilter.title && (
                <span className="inline-flex py-1 px-2 m-1 items-center gap-2 border-blue-200 bg-blue-100">
                  {searchFilter.title}
                  <img
                    onClick={() => setSearchFilter({ ...searchFilter, title: '' })}
                    className="hover:cursor-pointer"
                    src={assets.cross_icon}
                    alt="clear title"
                  />
                </span>
              )}
              {searchFilter.location && (
                <span className="inline-flex py-1 px-2 m-1 items-center gap-2 border-red-200 bg-red-100">
                  {searchFilter.location}
                  <img
                    onClick={() => setSearchFilter({ ...searchFilter, location: '' })}
                    className="hover:cursor-pointer"
                    src={assets.cross_icon}
                    alt="clear location"
                  />
                </span>
              )}
            </div>
          </div>
        ) : null}

        <button
          onClick={(e) => setShowFilter((prev) => !prev)}
          className="px-6 py-2 rounded lg:hidden border border-gray-600"
        >
          {showFilter ? 'Close' : 'Filters'}
        </button>

        {/* Filter by Categories */}
        <div className={showFilter ? '' : 'max-lg:hidden'}>
          <h4 className="font-medium text-lg py-4">Search by Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input
                  className="scale-125"
                  type="checkbox"
                  onChange={() => handleCategoryChange(category)}
                  checked={selectedCategories.includes(category)}
                />
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Filter by Location */}
        <div className={showFilter ? '' : 'max-lg:hidden'}>
          <h4 className="font-medium text-lg py-4">Search by Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input
                  className="scale-125"
                  type="checkbox"
                  onChange={() => handleLocationChange(location)}
                  checked={selectedLocations.includes(location)}
                />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        {/* Job Listings */}
        <section>
          <h3 className="text-3xl font-medium py-2" id="job-list">
            Latest Jobs
          </h3>
          <p className="mb-8">Get your desired Jobs from top companies</p>
        </section>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, index) => (
            <Jobcard key={index} props={job} />
          ))}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className="pagination flex justify-center items-center space-x-2 mt-10">
            <a  href="#job-list">
              <img
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                src={assets.left_arrow_icon}
                alt="Previous"
              />
            </a>

            {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map((_, index) => (
              <a href="#job-list" key={index}>
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
                    currentPage === index + 1 ? 'bg-blue-100 text-blue-500' : 'text-gray-500'
                  }`}
                >
                  {index + 1}
                </button>
              </a>
            ))}

            <a href="#job-list">
              <img
                onClick={() =>
                  setCurrentPage(Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6)))
                }
                src={assets.right_arrow_icon}
                alt="Next"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Joblisting;
