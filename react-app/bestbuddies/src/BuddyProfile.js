import React from 'react';
import buddy from './mock/buddy';



const BuddyProfile = () => {
	console.log(buddy);
	return(
		<div>
			<div class='header'>
				<img src='/' alt='profile picture' />
				<h1>Buddy: { buddy.name }</h1>
				<p>Address: { buddy.address }</p>
			</div>
			<div>
				<p>Matches:</p>
				<div>
					{ 
						buddy.volunteers.map((volunteer) => {
						<p>{volunteer.name} {volunteer.matching}</p>
						}) 
					}
				</div>
			</div>
		</div>
	)
}

export default BuddyProfile;
