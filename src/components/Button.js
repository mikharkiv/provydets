import React, {Component} from 'react';

class Button extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			type: props.type,
		}
	}
	
	render() {
		return (
			<button className="button" type={this.props.type} onClick={this.props.onClick}>
				{this.props.type}
			</button>
		)
	}
}

export default Button;