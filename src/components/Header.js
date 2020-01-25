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
				<Score name="pc" score={this.props.pc}/>
				<Buttons/>
				<Score name="user" score={this.props.user}/>
			</header>
		);
	}
}

export default Header;