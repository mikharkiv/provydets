import React, {Component} from "react";
import '../styles/Error.scss';

class ErrorScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="error_container">
				<div className="error window">
					<h1 className="error--label t_center uppercase">Something went wrong :/<br/>Please, try again</h1>
					<p className="error--code t_center">Error code: {this.props.error.error_code}</p>
					<p className="error--message t_center">{this.props.error.error_message}</p>
				</div>
			</div>
		);
	}
}
export {ErrorScreen}