import React, { Component } from 'react';

class Attempt extends Component{
	constructor(props) {
		super(props);
		this.state = {
			attempt: 0,
		};
	}
	
	render() {
		return  (
			<h1 className="uppercase attempt_title">attempt { this.state.attempt }</h1>
		);
	}
}

export default Attempt;