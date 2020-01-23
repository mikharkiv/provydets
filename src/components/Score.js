import React, {Component} from 'react';

class Score extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			score: props.score
		};
	}
	
	render() {
		return <div className="score">
			{this.state.name}:{this.state.score}
		</div>;
	}
}

export default Score;