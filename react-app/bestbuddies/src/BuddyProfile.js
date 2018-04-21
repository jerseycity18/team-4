import React from 'react';
import buddy from './mock/buddy';
import { Grid, Row, Col } from 'react-bootstrap';

const BuddyProfile = () => {

	return(
		<Grid>
			<Row>
				<Col md={ 2 }>
						<div class='profile-pic'></div>
				</Col>
				<Col md={ 10 } className='buddy-info'>
					<h4>Buddy: { buddy.name }</h4>
					<p>Address: { buddy.address }</p>
					<p>Joined on: { buddy.dateJoined }</p>
					<p>Last Match On: { buddy.dateSinceLastMatch }</p>
				</Col>
			</Row>
			<Row className='volunteers'>
				<Col md={ 12 }>
					<h1>Volunteers</h1>
					<Row>
						<Col md={ 1 }>
							<img src='/images/volunteer1.png' />
						</Col>
					</Row>
				</Col>
			</Row>
		</Grid>
	)
}

export default BuddyProfile;
