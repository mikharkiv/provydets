import React from 'react';
import '../styles/reset.scss';
import '../styles/App.scss';
import Body from './Body';
import Header from './Header';
import Footer from "./Footer";
import AnswerScreen from "./AnswerScreen";
import ErrorGuessing from "./ErrorGuessing";


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
				console.log("Before pc:"+this.state.pc)
				let pc_points = this.state.pc+1
				this.setState({pc:pc_points});
				break
			case "user":
				let user = this.state.user+1
				this.setState({user:user});
				console.log("Points user:"+this.state.user)
				break
		}
	}



	render() {
		return (
			<div className="App">
				<Header pc={this.state.pc} user={this.state.user}/>
				<Body pointUp={this.pointUp}/>
				<Footer/>
			</div>
		);
	}
}

export default App;