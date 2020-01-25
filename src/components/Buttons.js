import React, {Component} from 'react';
import Button from './Button';
import Modal from 'react-modal'

const customStyles = {
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)'
	}
};

class Buttons extends Component {
	constructor(props) {
		super(props);
		this.clickNewGameButton = this.clickNewGameButton.bind(this)
		this.clickResetScores = this.clickResetScores.bind(this)
		this.clickButtons = this.clickButtons.bind(this)
		this.state = {
			modalIsOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.startNewGame = this.startNewGame.bind(this);
	}

	openModal() {
		this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	clickNewGameButton(){
		this.openModal()
	}
	clickResetScores(){
		console.log("RESET SCORES")
	}
	clickButtons(){
		console.log("BUTTON BUTTONS WS CLICKED")
	}

	startNewGame(){
		this.closeModal()
		console.log("NEW GAME STARTS")
	}

	render() {
		return (
			<div className="button-group">
				<Modal isOpen={this.state.modalIsOpen} style={customStyles}>
					<p className="txt">Are you sure you want to start a new game ?</p>
					<div className="button-group">
					<button className="button" onClick={this.closeModal}>NO</button>
					<button className="button" onClick={this.startNewGame}>YES</button>
					</div>
				</Modal>
				<Button type="new game" onClick={this.clickNewGameButton} />
				<Button type="reset scores" onClick={this.clickResetScores}/>
				<Button type="buttons"onClick={this.clickButtons} />
			</div>
		)
	}
}

export default Buttons;