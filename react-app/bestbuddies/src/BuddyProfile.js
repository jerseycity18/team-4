import React from 'react';
import buddy from './mock/buddy';
import { Grid, Row, Col } from 'react-bootstrap';

const BuddyProfile = () => {
	console.log(buddy);
	return(
		<Grid>
			<Row className="show-grid">
				<Col md={ 4 }>
						<div>sadasdasdsa</div>
				</Col>
				<Col md={ 8 }>
					<h4>Buddy: { buddy.name }</h4>
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
		</Grid>
	)
}

export default BuddyProfile;
