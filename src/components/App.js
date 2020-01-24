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

	myCallback = (dataFromChild) => {
		const answerTestProps = {
			attempt: 1,
			songPreview: "https://img.discogs.com/dADBPB6TzEoBdGQFKQy-MhHBA_0=/fit-in/388x374/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2027877-1259432078.jpeg.jpg",
			songTitle: "What a wonderful world",
			songAuthor: "Louis Armstrong",
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