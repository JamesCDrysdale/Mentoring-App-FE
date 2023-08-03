import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Mentor = ({ mentor }) => {

  if (!mentor) {
    return "Loading..."
  }
  const url = "/mentors/" + mentor.id;
  return (
    <Fragment>
      <p>
        <Link to={url} className="name">
          {mentor.fullName}
        </Link>
      </p>
      <p>Email: {mentor.email}</p>
      <p>Bio: {mentor.bio}</p>
    </Fragment>
  )
}

export default Mentor;