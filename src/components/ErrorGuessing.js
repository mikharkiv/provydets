import React, {Component} from 'react';
import '../styles/ErrorGuessing.scss';

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
			<div className="error_guessing_container">
				<div className="error_guessing window">
					<p className="error_guessing--label t_center uppercase">i can't guess your song.<br/>can we try again?</p>
					<div className="error_guessing--buttons">
						<button className="error_guessing--buttons--yesbtn button" onClick={this.yesButt}>try again</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ErrorGuessing;