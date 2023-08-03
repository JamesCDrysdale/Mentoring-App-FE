import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Mentor = ({ mentor }) => {

  if (!mentor) {
    return "Loading..."
  }
  const url = "/mentors/" + mentor.id;
  return (
    <>
      <h2>
        <Link to={url} className="name">
          {mentor.name}
        </Link>
      </h2>
      <p>Email: {mentor.email}</p>
      <p>LinkedIn: <a href={`https://www.linkedin.com${mentor.linkedIn}`}>{mentor.linkedIn}</a></p><p>Bio: {mentor.bio}</p>
    </>
  )
}

export default Mentor;