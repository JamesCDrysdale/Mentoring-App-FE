import React from 'react';
import Mentor from "./Mentor";

const MentorDetail = ({ mentor, handleDelete }) => {

    if (mentor) {

        const mentorsMentees = mentor.mentees.map((mentee, index) => {
            return <li key={index}>{mentee.fullName}</li>
        })

        const onDelete = () => {
            handleDelete(mentor.id)
        }

        return (
            <div className="component">
                <Mentor mentor={mentor} />
                <p>Mentees:</p>
                <ul>
                    {mentorsMentees}
                </ul>
                <button onClick={onDelete}>Delete {mentor.fullName}</button>
            </div>
        )
    }

    return (
        <p>Loading.....</p>
    )
}

export default MentorDetail;