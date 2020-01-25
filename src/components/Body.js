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
//     render() {
//         return (
//             <div className="listen">
//                 <p className="uppercase t_center">Press the mic<br/>
//                 To start recording</p>
//                 <div className="listen--mic">
//                     <img src="./res/mic.svg" alt="" className="listen--mic__img" onClick={this.record}/>
//                 </div>
//                 <div>
//                     <Timer run={this.state.isRecording}></Timer>
//                 </div>

//                 <div className="listen--buttons">
//                     <div className="listen--buttons--container">
//                         <button className="button" disabled={this.state.isDisabled} onClick={this.songRequest}>
//                             Song
//                         </button>
//                         <button className="button" disabled={this.state.isDisabled} onClick={this.hummingRequest}>
//                             Humming
//                         </button>
//                     </div>
//                     <p className="uppercase t_center">click any button to stop recording and submit</p>
//                 </div>
//             </div>
//         )
//     }
//     render() {
//         return (
//             <div className="lyrics">
//                 <img src="./res/lyrics.svg" alt="" className="lyrics--img"></img>
//                 <textarea className="lyrics--textarea" rows="2" placeholder="Your lyrics..." onChange={this.handleChange}/>
//                 <button className="lyrics--button button">submit</button>
//             </div>
//         )
//     }
}

export default Body;  