import React from 'react';
import '../styles/reset.scss';
import '../styles/App.scss';
import Body from './Body';
import Header from './Header';
import Footer from "./Footer";

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