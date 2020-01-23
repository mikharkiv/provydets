import React, {Component} from 'react';
import Button from './Button';

class Buttons extends Component {
	render() {
		return (
			<div className="button-group">
				<Button type="new game" />
				<Button type="reset scores" />
				<Button type="buttons" />
			</div>
		)
	}
}

export default Buttons;