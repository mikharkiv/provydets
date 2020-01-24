import React, {Component} from 'react';

class Score extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return <div className="score">
			{this.props.name}:{this.props.score}
		</div>;
	}
}

export default Score;