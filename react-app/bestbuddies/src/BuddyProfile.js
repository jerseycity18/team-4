import React from 'react';
import buddy from './mock/buddy';
import { Row, Col } from 'react-bootstrap';

const BuddyProfile = () => {
	console.log(buddy);
	return(
		<div>
			<Row>
				<Col md={ 3 }>
						<div class='profile-pic'></div>
				</Col>
				<Col md={ 9 }>
					<h1>Buddy: { buddy.name }</h1>
					<p>Address: { buddy.address }</p>
				</Col>
			</Row>
			<Row>
				<p>Matches:</p>
				<div>
					{ 
						buddy.volunteers.map((volunteer) => {
						<p>{volunteer.name} {volunteer.matching}</p>
						}) 
					}
				</div>
			</Row>
		</div>
	)
}

export default BuddyProfile;
