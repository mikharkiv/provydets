import React from 'react';
import Score from './Score';
import Buttons from './Buttons';

function Header() {
	return (
		<header className="App-header">
			<Score name="pc" score="0" />
			<Buttons />
			<Score name="user" score="0" />
		</header>
	);
}

export default Header;