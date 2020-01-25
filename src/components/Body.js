import React from 'react';
import AnswerScreen from "./AnswerScreen";
import ErrorGuessing from "./ErrorGuessing";
import {Inputs} from "./Inputs";
import {ErrorScreen} from "./ErrorScreen";
import WinScreen from "./WinScreen";

class Body extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			component: <Inputs callbackFromParent={this.myCallback}/>,
			songsList:[]
		}
	}

	//requestData comes in the format result["deezer"]
	myCallback = (dataFromChild, requestData) => {
		console.log(requestData)
		let answerTestProps;
		//console.log(requestData)
		if (dataFromChild === "AnswerScreen" && requestData != undefined && requestData["artist"] != undefined) {

			let artist = requestData["artist"]["name"]
			let title = requestData["title"]
			let preview = requestData["album"]["cover_big"]
			answerTestProps = {
				attempt: this.state.attempt,
				songPreview: preview,
				songTitle: title,
				songAuthor: artist,
			};

			this.state.songsList.push(requestData)
			console.table(this.state.songsList)
		}

		switch (dataFromChild) {
			case
			"Inputs"
			:
				this.setState({component: <Inputs callbackFromParent={this.myCallback}/>})
				break
			case
			"AnswerScreen"
			:
				if (answerTestProps != null) {
					this.setState({
						component: <AnswerScreen param={answerTestProps} callbackFromParent={this.myCallback}
												 pointUp={this.props.pointUp} song={requestData}/>
					})
				} else {
					this.setState({
						component: <ErrorGuessing callbackFromParent={this.myCallback} pointUp={this.props.pointUp}/>
					})
				}
				break
			case "ErrorScreen"
			:
				this.setState({
					component: <ErrorScreen callbackFromParent={this.myCallback} error={requestData}/>
				})
				break
			case "WinScreen" :
				console.table(requestData)
				console.table('win screen')
				this.setState({
					component: <WinScreen callbackFromParent={this.myCallback} winner_song={requestData} songs={this.state.songsList} won={true} winner="User" attempt={this.props.attempt}/>
				})
				break
		}

	}

	render() {
		return (
			<section className="App-body">
				{this.state.component}
			</section>
		);
	}
}

export default Body;  