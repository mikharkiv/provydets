import React, {Component} from "react";

class ErrorScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="error window">
				<p className="error--label uppercase">Something went wrong :/<br/>Please try again</p>
				<br/>
				<h1>{this.props.error.error_code}</h1>
				<h1>{this.props.error.error_message}</h1>
			</div>
		);
	}
}
export {ErrorScreen}