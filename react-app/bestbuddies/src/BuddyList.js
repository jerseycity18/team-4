import React from 'react';
import buddy from './mock/buddy';
import {Grid, Row, Col} from 'react-bootstrap';
import './BuddyList.css';

const BuddyList = (props) => {
    const { goToBuddyPage } = props;

	return(
		<div className="BuddyList">
            <Grid>
                <Row md={12}>
                    <Col md={3} className="BuddyContainer" onClick={ goToBuddyPage }>
                        <img src="images/volunteer1.png"/>
                    </Col>
                    <Col md={3} className="BuddyContainer" onClick={ goToBuddyPage }>
                        <img src="images/volunteer2.png"/>
                     </Col>
                     <Col md={3} className="BuddyContainer" onClick={ goToBuddyPage }>
                         <img src="images/volunteer3.png"/>
                      </Col>
                      <Col md={3} className="BuddyContainer" onClick={ goToBuddyPage }>
                        <img src="images/volunteer4.png"/>
                      </Col>
                </Row>
                <Row md={12}>
                    <Col md={3} className="BuddyContainer" onClick={ goToBuddyPage }>
                        <img src="images/volunteer4.png"/>
                    </Col>
                    <Col md={3} className="BuddyContainer" onClick={ goToBuddyPage }>
                        <img src="images/volunteer3.png"/>
                     </Col>
                     <Col md={3} className="BuddyContainer" onClick={ goToBuddyPage }>
                         <img src="images/volunteer2.png"/>
                      </Col>
                      <Col md={3} className="BuddyContainer" onClick={ goToBuddyPage }>
                        <img src="images/volunteer5.png"/>
                      </Col>
                </Row>
            </Grid>
		</div>
	)
}

export default BuddyList;
