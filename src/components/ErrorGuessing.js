import React, {Component} from 'react';

class ErrorGuessing extends Component {
	constructor(props) {
		super(props);
		this.yesButt = this.yesButt.bind(this)
	}

	yesButt(){
		this.props.callbackFromParent("Inputs")
		this.props.attemptUp()
	}

	render() {
		return (
			<div className="error window">
				<p className="error--label uppercase">i can't guess your song.<br/>can we try again?</p>
				<button className="error--yesbtn button" onClick={this.yesButt}>yes</button>
				<button className="error--nobtn button">no</button>
			</div>
		);
	}
}

export default ErrorGuessing;