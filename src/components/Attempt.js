import React, { Component } from 'react';

class Attempt extends Component{
	constructor(props) {
		super(props);
	}
	
	render() {
		return  (
			<h1 className="uppercase attempt_title">attempt { this.props.attempt }</h1>
		);
	}
}

export default Attempt;