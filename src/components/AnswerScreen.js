import React, {Component} from 'react';

class AnswerScreen extends Component {
	constructor(props) {
		super(props);
		this.wrongAnswer = this.wrongAnswer.bind(this)
		this.rightAnswer = this.rightAnswer.bind(this)
	}

	wrongAnswer(){
		this.props.callbackFromParent("Body")
	}

	rightAnswer(){
		this.props.callbackFromParent("Body")
	}

	render() {
		return (
			<div className="answer_screen">
				<h1 className="answer_screen--attempt_title">attempt { this.props.param.attempt }</h1>
				<h1>am i right?</h1>
				<div className="answer_screen--player window">
					<div className="player--image">
						<img className="player--image--img" src={ this.props.param.songPreview } alt={ this.props.param.songTitle }/>
					</div>
					<p className="player--author">{ this.props.param.songAuthor }</p>
					<p className="player--title">{ this.props.param.songTitle }</p>
					<div className="player--play_button"></div>
					<div className="player__bar" id="playerBar">
						{/* TODO for test */}
						<p className="player__bar--time_passed" id="playerTimePassed">0:10</p>
						<p className="player__bar--time_left" id="playerTimeLeft">0:20</p>
					</div>
					<button className="button" id="answerYesButton" onClick={this.rightAnswer}>yes, right!</button>
					<button className="button" id="answerNoButton" onClick={this.wrongAnswer}>no, dummy!</button>
				</div>
			</div>
		);
	}
}

export default AnswerScreen;