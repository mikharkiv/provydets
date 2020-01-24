import React, {Component} from 'react';
import SongPreview from "./SongPreview";

class WinScreen extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		const listSongs = this.props.songs.map((song) =>
		<SongPreview song=song />
		);
		const winText = (this.props.won ? this.props.winner + " won on attempt " + this.props.attempt + "1" : "Nobody won(");
		return (
			<div className="win_screen">
				<h1 className="win_screen--win_text"> { winText } </h1>
				<h1>correct answer was:</h1>
				<div className="win_screen--correct_song window">
					<SongPreview song={ this.props.song } />
				</div>
				<div className="win_screen--songs_list window scrollable">
					{ listSongs }
				</div>
			</div>
		);
	}
}

export default WinScreen;