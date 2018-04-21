import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BuddyList from './buddyList';
import BuddyProfile from './BuddyProfile';

class App extends Component {
	constructor() {
		super();
		this.state = {
			page: 'buddyProfile'
			// page: 'buddyList'
		};
		this.handleGoToBuddyPage = this.handleGoToBuddyPage.bind(this);
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
