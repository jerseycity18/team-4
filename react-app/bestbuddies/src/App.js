import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import BuddyProfile from './BuddyProfile';

class App extends Component {
	constructor() {
		super();
		this.state = {
			page: 'buddyList'
		};
	}
	handleGoToBuddyPage() {
		this.setState({
			page: 'buddyProfile'
		})
	}
	getPage() {
		const page = this.state.page;
		if(page === 'buddyList') {
			return <BuddyList goToBuddyPage={ handleGoToBuddyPage }/>
		}
		return <BuddyProfile />
	}
	const page = 'buddylist';
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to BestBuddies</h1>
        </header>
			{ getPage() }
      </div>
    );
  }
}

export default App;
