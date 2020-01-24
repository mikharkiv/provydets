import React from 'react';
import '../styles/reset.scss';
import '../styles/App.scss';
import Body from './Body';
import Attempt from './Attempt';
import Header from './Header';
import Footer from "./Footer";
import AnswerScreen from './AnswerScreen';

function App() {
	// TODO: FOR TEST
	const answerTestProps = {
		attempt: 1,
		songPreview: "https://img.discogs.com/dADBPB6TzEoBdGQFKQy-MhHBA_0=/fit-in/388x374/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2027877-1259432078.jpeg.jpg",
		songTitle: "What a wounderful world",
		songAuthor: "Louis Armstrong",
	};
	
	
	return (
		<div className="App">
			<Header />
			<Attempt />
			{/*<Body />*/}
			<AnswerScreen param={answerTestProps} />
			<Footer/>
		</div>
	);
}

export default App;