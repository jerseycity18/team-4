import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BuddyList from './BuddyList';
import BuddyProfile from './BuddyProfile';

class App extends Component {
	constructor() {
		super();
		this.state = {
			// page: 'buddyProfile'
		     page: 'buddyList'
		};
		this.handleGoToBuddyPage = this.handleGoToBuddyPage.bind(this);
	}

	UNSAFE_componentWillMount() {
	    const url = 'http://localhost:8080/members'
	    fetch(url, {mode: 'no-cors'}) // Call the fetch function passing the url of the API as a parameter
        .then(function(data) {
            // Your code for handling the data you get from the API
            console.log("DATA FROM SERVER")
            console.log(data)
        })
        .catch(function() {
            // This is where you run code if the server returns any errors
        });
	}

	handleGoToBuddyPage() {
		this.setState({
			page: 'buddyProfile'
		})
	}
	getPage() {
		const page = this.state.page;
		if(page === 'buddyList') {
			return <BuddyList goToBuddyPage={ this.handleGoToBuddyPage }/>
		}
		return <BuddyProfile />
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to BestBuddies</h1>
        </header>
			{ this.getPage() }
      </div>
    );
  }
}

export default App;
