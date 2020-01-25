import React from 'react';
import '../styles/reset.scss';
import '../styles/App.scss';
import Body from './Body';
import Attempt from './Attempt';
import Header from './Header';
import Footer from "./Footer";
import AnswerScreen from './AnswerScreen';
import SongPreview from './SongPreview';
import WinScreen from './WinScreen';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pc:0,
			user:0
		}
	}

	pointUp = (pointReceiver) => {
		switch(pointReceiver){
			case "pc":
				let pc_points = this.state.pc+1;
				this.setState({pc:pc_points});
				break
			case "user":
				let user_points = this.state.user+1
				this.setState({user:user_points});
				break
		}
	}
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
	
  render() {
	return (
		<div className="App">
			<Header />
			{/*<Attempt />*/}
			{/*<Body />*/}
			{/*<AnswerScreen param={answerTestProps} />*/}
			{/*<SongPreview song={answerTestProps} />*/}
			<WinScreen won={true} winner="User" song={ answerTestProps } songs={ songs }/>
			<Footer/>
		</div>
	);
  }
}

export default App;