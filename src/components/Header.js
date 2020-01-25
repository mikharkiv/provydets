import React from 'react';
import Score from './Score';
import Buttons from './Buttons';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<header className="App-header">
				<Score name="pc" score={0}/>
				<Buttons/>
				<Score name="user" score={0}/>
			</header>
		);
	}
}

export default Header;