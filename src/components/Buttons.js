import React, {Component} from 'react';
import Button from './Button';


class Buttons extends Component {
	constructor(props) {
		super(props);
		this.clickNewGameButton = this.clickNewGameButton.bind(this)
		this.clickResetScores = this.clickResetScores.bind(this)
		this.clickButtons = this.clickButtons.bind(this)
	}

	clickNewGameButton(){
		console.log(this)
		console.log("NEW GAME STARTS")
	}
	clickResetScores(){
		console.log("RESET SCORES")
	}
	clickButtons(){
		console.log("BUTTON BUTTONS WS CLICKED")
	}

	render() {
		return (
			<div className="button-group">
				<Button type="new game" onClick={this.clickNewGameButton} />
				<Button type="reset scores" onClick={this.clickResetScores}/>
				<Button type="buttons"onClick={this.clickButtons} />
			</div>
		)
	}
}

export default Buttons;