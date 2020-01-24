import React, {Component} from 'react';
import Button from './Button';

class Buttons extends Component {
	render() {
		return (
			<div className="button-group">
				<Button type="new game" />
				<Button type="leaderboard" />
			</div>
		)
	}
}

export default Buttons;