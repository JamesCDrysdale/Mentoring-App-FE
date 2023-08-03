import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import NavBar from '../components/NavBar';
import MentorContainer from './MentorContainer.js';


const MainContainer = () => {

  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/mentors/*" element={<MentorContainer />} />
      </Routes>
    </div>
  )
}

export default MainContainer;