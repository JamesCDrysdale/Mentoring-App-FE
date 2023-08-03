import React from 'react';
import { useNavigate } from 'react-router-dom';  

import Mentor from "./Mentor";

const MentorDetail = ({ mentor, handleDelete }) => {
    const navigate = useNavigate();

    if (mentor) {

        const mentorsMentees = mentor.mentees.map((mentee, index) => {
            console.log(mentee);
            return <li key={index}><a href={`/mentees/${mentee.id}`}>{mentee.name}</a></li>
        })

        const onDelete = () => {
            handleDelete(mentor.id)
        }

        const onEdit = () => {
        navigate(`/mentors/${mentor.id}/edit`);
    }

        return (
            <div className="component">
                <Mentor mentor={mentor} />
                <p>Mentees:</p>
                <ul>
                    {mentorsMentees}
                </ul>
                <button onClick={onDelete}>Delete {mentor.name}</button>
                <button onClick={onEdit}>Edit</button>
            </div>
        )
    }

    return (
        <p>Loading.....</p>
    )
}

export default MentorDetail;