import React, { Component } from 'react';
import '../styles/AnswerScreen.scss'

class AnswerScreen extends Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.wrongAnswer = this.wrongAnswer.bind(this)
		this.rightAnswer = this.rightAnswer.bind(this)
	}

	wrongAnswer() {
		this.props.pointUp("user")
		this.props.callbackFromParent("Inputs")
	}

	rightAnswer() {
		this.props.pointUp("pc")
		this.props.callbackFromParent("WinScreen", this.props.song)
	}

	render() {
		return (
			<div className="answer_screen">
				<div className="player window">
					<h1 className="t_center">am i right?</h1>
					<div className="player--image">
						<img className="player--image--img" src={this.props.param.songPreview} alt={this.props.param.songTitle} />
					</div>
					<p className="t_center player--author">{this.props.param.songAuthor}</p>
					<p className="t_center player--title">{this.props.param.songTitle}</p>
					<div className="player--play_button"></div>
					<div className="player__bar" id="playerBar">
						<audio
							controls
							src={this.props.song.preview}>
							Your browser does not support the
            	<code>audio</code> element.
    				</audio>
					</div>
					<div className="player--buttons">
						<button className="button" id="answerYesButton" onClick={this.rightAnswer}>yes, right!</button>
						<button className="button" id="answerNoButton" onClick={this.wrongAnswer}>no, dummy!</button>
					</div>
				</div>
			</div>
		);
	}
}

export default AnswerScreen;