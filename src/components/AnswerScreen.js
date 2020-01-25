import React, { Component } from 'react';
import '../styles/AnswerScreen.scss'
import GreenAudioPlayer from "green-audio-player/src/js/main";
import "../styles/green-audio-player.scss";

class AnswerScreen extends Component {
	constructor(props) {
		super(props);
		this.wrongAnswer = this.wrongAnswer.bind(this)
		this.rightAnswer = this.rightAnswer.bind(this)
	}

	wrongAnswer(){
		this.props.callbackFromParent("Inputs")
		this.props.attemptUp()
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
					<div className="player--audio" id="playerBar">
						<audio
							crossOrigin="true"
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
	
	componentDidMount() {
		new GreenAudioPlayer('.player--audio');
	}
}

export default AnswerScreen;