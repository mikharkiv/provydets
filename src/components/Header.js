import React from 'react';
import Score from './Score';
import Buttons from './Buttons';

function Header(props) {
	return (
		<header className="App-header">
			<Score name="pc" score={props.pc}/>
			<Buttons />
			<Score name="user" score={props.user}/>
		</header>
	);
}

export default Header;