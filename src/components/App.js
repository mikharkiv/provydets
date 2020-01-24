import React from 'react';
import '../styles/reset.scss';
import '../styles/App.scss';
import Body from './Body';
import Header from './Header';
import Footer from "./Footer";
import AnswerScreen from './AnswerScreen';

class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			component:<Body callbackFromParent={this.myCallback}/>
		}
	}

	myCallback = (dataFromChild, requestData) => {
		let artist = requestData["result"]["artist"]
		let title = requestData["result"]["title"]
		let preview = requestData["result"]["deezer"]["album"]["cover_big"]
		const answerTestProps = {
			attempt: 1,
			songPreview: preview,
			songTitle: title,
			songAuthor: artist,
		};
		switch (dataFromChild) {
			case
			"Body"
			:
				this.setState({component:<Body callbackFromParent={this.myCallback}/>})
				break
			case
			"AnswerScreen"
			:
				this.setState({component:<AnswerScreen param={answerTestProps} callbackFromParent={this.myCallback}/>})
				break
		}
	}


    render() {
        return (
            <div className="App">
                <Header/>
                {this.state.component}
                <Footer/>
            </div>
        );
    }
}

export default App;