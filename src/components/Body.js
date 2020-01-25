import React from 'react';
import AnswerScreen from "./AnswerScreen";
import ErrorGuessing from "./ErrorGuessing";
import {Inputs} from "./Inputs";

class Body extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			component: <Inputs callbackFromParent={this.myCallback}/>
		}
	}

	//requestData comes in the format result["deezer"]
	myCallback = (dataFromChild, requestData) => {
		let answerTestProps;
		console.log(requestData)
		if (requestData != undefined) {
			let artist = requestData["artist"]["name"]
			let title = requestData["title"]
			let preview = requestData["album"]["cover_big"]
			answerTestProps = {
				attempt: 1,
				songPreview: preview,
				songTitle: title,
				songAuthor: artist,
			};
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
												 pointUp={this.props.pointUp}/>
					})
				} else {
					this.setState({
						component: <ErrorGuessing callbackFromParent={this.myCallback} pointUp={this.props.pointUp}/>
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