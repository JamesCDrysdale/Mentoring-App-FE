import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import Request from '../helpers/request'; 
import MentorList from '../components/mentors/MentorList';
import MentorDetail from '../components/mentors/MentorDetail';
import MentorForm from '../components/mentors/MentorForm';

const MentorContainer = () => {

  const [mentors, setMentors] = useState([])
//   const [mentees, setMentees] = useState([])

  useEffect(() => {
    const request = new Request();
    const mentorPromise = request.get('/mentors');
    const menteePromise = [];

    Promise.all([mentorPromise, menteePromise])
      .then((data) => {
        setMentors(data[0])
        // setMentees(data[1])
      })
  }, [])

  const findMentorById = (id) => {
    return mentors.find((mentor) => {
      return mentor.id === parseInt(id);
    })
  }

  const MentorDetailWrapper = () => {
    const { id } = useParams();
    let foundMentor = findMentorById(id)
    return <MentorDetail mentor={foundMentor} handleDelete={handleDelete} />;
  };

  const handleDelete = (id) => {
    // TODO: use API to delete by ID
    window.location = '/mentors';
  }

  const handlePost = (mentor) => {
    // TODO: use API to create mentor
    window.location = '/mentors'
  };

  return (
    <Routes>
      <Route path="/new" element={
        <MentorForm onCreate={handlePost} />
      } />
      <Route path="/:id" element={
        <MentorDetailWrapper />
      } />
      <Route path="/" element={<MentorList mentors={mentors} />} />
    </Routes>
  )

}

export default MentorContainer;