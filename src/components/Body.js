import React from 'react';
import AnswerScreen from "./AnswerScreen";
import ErrorGuessing from "./ErrorGuessing";
import WinScreen from './WinScreen';
import {Inputs} from "./Inputs";
import {ErrorScreen} from "./ErrorScreen";

// TODO: FOR TEST
const answerTestProps = {
	attempt: 1,
	songPreview: "https://img.discogs.com/dADBPB6TzEoBdGQFKQy-MhHBA_0=/fit-in/388x374/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2027877-1259432078.jpeg.jpg",
	songTitle: "What a wounderful world",
	songAuthor: "Louis Armstrong",
};

const songs = [
	answerTestProps,
	answerTestProps,
	answerTestProps,
	answerTestProps,
	answerTestProps
];

class Body extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			component: <Inputs callbackFromParent={this.myCallback}/>,
			songsList:[]
		}
	}

	componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
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
				if(requestData == "new game") {
					this.setState({
						songsList: []
					})

				}
				this.setState({component: <Inputs callbackFromParent={this.myCallback}/>})
				break
			case
			"AnswerScreen"
			:
				if (answerTestProps != null) {
					this.setState({
						component: <AnswerScreen attemptUp={this.props.attemptUp} param={answerTestProps} callbackFromParent={this.myCallback}
												 pointUp={this.props.pointUp} song={requestData}/>
					})
				} else {
					this.setState({
						component: <ErrorGuessing attemptUp={this.props.attemptUp} callbackFromParent={this.myCallback} pointUp={this.props.pointUp}/>
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
				if(requestData == "User")  {
					this.setState({
						component: <WinScreen callbackFromParent={this.myCallback} songs={this.state.songsList} winner="User" attempt={this.props.attempt}/>
					})
				}
				else {
					this.setState({
						component: <WinScreen callbackFromParent={this.myCallback} winner_song={requestData} songs={this.state.songsList} winner="PC" attempt={this.props.attempt}/>
					})
				}
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