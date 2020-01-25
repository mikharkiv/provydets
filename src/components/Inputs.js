import React from "react";
import {requestAudd, requestDeezer} from "./Logic";
import {Timer} from "./Timer";
import 'mic-recorder-to-mp3' ;

const MicRecorder = require('mic-recorder-to-mp3');

const recorder = new MicRecorder({
	bitRate: 128
});

class Inputs extends React.Component {
	render() {
		return (
			<div className="input">
				<Listen callbackFromParent={this.props.callbackFromParent}/>
				<div className="or">
					OR
				</div>
				<Type callbackFromParent={this.props.callbackFromParent}/>
			</div>
		)
	}
}

class Listen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isRecording: false,
			isDisabled: true,
			voice_sample: null,
			data: null
		};
		this.record = this.record.bind(this);
		this.songRequest = this.songRequest.bind(this)
		this.hummingRequest = this.hummingRequest.bind(this)
	}

	record() {
		if (this.state.isRecording) {
			this.stop()
			this.setState({isDisabled: false})
			this.setState({isRecording: false})
		} else {
			this.start()
			this.setState({isRecording: true})
		}
	}

	start() {
		console.log("Start recording...");
		recorder.start().then(() => {
		}).catch((e) => {
			console.error(e);
		});
	}

	//const player = new Audio(URL.createObjectURL(file));
	//player.play()

	stop() {
		console.log("Stop recording...");
		recorder.stop().getMp3().then(([buffer, blob]) => {
			const file = new File(buffer, 'voice_sample.mp3', {
				type: blob.type,
				lastModified: Date.now()
			});
			this.setState({voice_sample: file})
		}).catch((e) => {
			alert('We could not retrieve your message');
			console.log(e);
		});
	}

	resolveSongRequest(call, data) {
		if (data.result === null) call.props.callbackFromParent("AnswerScreen", null)
		else if (data["status"] === "error")
			call.props.callbackFromParent("ErrorScreen", data["error"])
		else
			call.props.callbackFromParent("AnswerScreen", data["result"]["deezer"])
	}

	songRequest() {
		console.log("Sending song recognition request...");
		requestAudd(this, this.resolveSongRequest, this.state.voice_sample)
	}

	resolveDeezerRequest(call, data) {
		call.props.callbackFromParent("AnswerScreen", data.data[0])
	}

	resolveHummingRequest(call, data) {
		if (data.result === null) call.props.callbackFromParent("AnswerScreen", null)
		else if (data["status"] === "error")
			call.props.callbackFromParent("ErrorScreen", data["error"])
		else
			requestDeezer(call, call.resolveDeezerRequest, data.result.list[0]["title"], data.result.list[0]["artist"]);
	}

	hummingRequest() {
		console.log("Sending humming recognition request...");
		requestAudd(this, this.resolveHummingRequest, this.state.voice_sample, "recognizeWithOffset")
	}

	render() {
		return (
			<div className="listen">
				<p>Press the mic <br/>
					To start recording</p>
				<img src="./res/mic.svg" alt="" className="mic" onClick={this.record}/>
				<div>
					<Timer run={this.state.isRecording}></Timer>
				</div>

				<div className="audio-type-selection">
					<button className="button" disabled={this.state.isDisabled} onClick={this.songRequest}>
						Song
					</button>
					<button className="button" disabled={this.state.isDisabled} onClick={this.hummingRequest}>
						Humming
					</button>
				</div>
			</div>
		)
	}
}

class Type extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	resolveDeezerRequest(call, data) {
		call.props.callbackFromParent("AnswerScreen", data.data[0])
	}

	resolveAuddRequest(call, data) {
		console.log(data)
		if (data === undefined)
			call.props.callbackFromParent("AnswerScreen", null)
		if (data["status"] === "error")
			call.props.callbackFromParent("ErrorScreen", data["error"])

		//requestDeezer(call, call.resolveDeezerRequest, data.result[0]["title"], data.result[0]["artist"]);
	}

	handleSubmit(event) {
		console.log("Sending lyrics recognition request...");
		event.preventDefault();
		requestAudd(this, this.resolveAuddRequest, null, 'findLyrics', this.state.value);
	}

	render() {
		return (
			<div className="type">
				<form onSubmit={this.handleSubmit}>
					<img src="./res/lyrics.svg" alt="" className="lyrics"/>
					<textarea className="textarea" rows="2" placeholder="Your lyrics..." onChange={this.handleChange}/>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		)
	}
}

export {Inputs}