import React, { useContext } from "react"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import ApplyJobs from './pages/ApplyJobs'
import Applications from './pages/Applications'
import Recruiterlogin from "./components/Recruiterlogin"
import { AppContext } from "./context/AppContext"
import Dashboard from "./pages/Dashboard"
import Addjob from "./pages/Addjob"
import Managejobs from "./pages/Managejobs"
import Viewapplications from "./pages/Viewapplications"

import 'quill/dist/quill.snow.css'

function App() {

  const {showRecruiterLogin} = useContext(AppContext)

  return (
    <>
      <div>
        {
           showRecruiterLogin
           &&
           <Recruiterlogin/>

        }
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply-job/:id" element={<ApplyJobs />} />
          <Route path="/applications" element={<Applications />} />

          <Route path="/dashboard" element={<Dashboard />} >
             <Route path="add-job" element={<Addjob />} />
             <Route path="manage-jobs" element={<Managejobs />} />
             <Route path="view-applications" element={<Viewapplications />} />
          </Route>

        </Routes>
      </div>
    </>
  )
}

export default App
