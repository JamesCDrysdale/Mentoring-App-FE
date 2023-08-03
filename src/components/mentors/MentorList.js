import React from 'react';
import Mentor from './Mentor.js';


const MentorList = ({ mentors }) => {
	if (mentors.length === 0) {
		return (<p>Loading...</p>)
	}

	const mentorElements = mentors.map((mentor, index) => {
		return (
			<li key={index} className="component-item">
				<div className="component">
					<Mentor mentor={mentor} />
				</div>
			</li>
		)
	})

	return (
		<ul className="component-list">
			{mentorElements}
		</ul>
	)
}
export default MentorList;