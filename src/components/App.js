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
			pc: 0,
			user: 0,
			attempt: 1
		}
	}

	newGameCallback = () => {
		this.child.myCallback("Inputs", "new game")
	}

	attemptUp = () => {
		let at = this.state.attempt + 1;
		if (at === 6) {
			this.child.myCallback("WinScreen", "User")
		}
		else {
			this.setState({ attempt: at })
		}

	}

	pointUp = (pointReceiver) => {
		switch (pointReceiver) {
			case "pc":
				let pc_points = this.state.pc + 1;
				this.setState({ pc: pc_points });
				break
			case "user":
				let user_points = this.state.user + 1
				this.setState({ user: user_points });
				break
		}
	}

	render() {
		return (
			<div className="App">
				<Header newGameCallback={this.newGameCallback} pc={this.state.pc} user={this.state.user} />
				<Attempt attempt={this.state.attempt} />
				<Body attemptUp={this.attemptUp} onRef={ref => (this.child = ref)} pointUp={this.pointUp} attempt={this.state.attempt} />
				<Footer />
			</div>
		);
	}
}

export default App;