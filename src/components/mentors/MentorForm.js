import React, { useState } from 'react';

const MentorForm = ({ mentees, onCreate }) => {

    const [stateMentor, setStateMentor] = useState(
        {
            fullName: "",
            bio: "",
            email: "",
        }
    )

    // if (!mentees.length === 0) {
    //     return <p>Loading...</p>
    // }

    const handleChange = function (event) {
        let propertyName = event.target.name;
        let copiedMentor = { ...stateMentor }
        copiedMentor[propertyName] = event.target.value;
        setStateMentor(copiedMentor)
    }

    // const handleMentee = function (event) {
    //     const index = parseInt(event.target.value)
    //     const selectedMentee = mentees[index]
    //     let copiedMentor= { ...stateMentor };
    //     copiedMentor['mentee'] = selectedMentee
    //     setStateMentor(copiedMentor)
    // }

    const handleSubmit = function (event) {
        event.preventDefault();
        onCreate(stateMentor);
    }

    // const menteeOptions = mentees.map((mentee, index) => {
    //     return <option key={index} value={index}>{mentee.fullName}</option>
    // })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" name="fullName" onChange={handleChange} value={stateMentor.fullName} />
                <input type="text" placeholder="Email" name="email" onChange={handleChange} value={stateMentor.email} />
                <input type="bio" placeholder="Bio" name="bio" onChange={handleChange} value={stateMentor.bio} />
                {/* <select name="mentee" onChange={handleMentee} defaultValue="select-mentee">
                    <option disabled value='select-mentee'>Select a mentee</option>
                    {menteeOptions}
                </select> */}

                <button type="submit">Save</button>
            </form>
        </div>
    )

}

export default MentorForm;