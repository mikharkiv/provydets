import React, {Component} from 'react';
import SongPreview from "./SongPreview";
import "../styles/WinScreen.scss";
import "../styles/SongPreview.scss";

class WinScreen extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		const listSongs = this.props.songs.map((song) =>
		<SongPreview songData={song} key={song.toString()} />
		);
		const winText = (this.props.won ? this.props.winner + " won on attempt " + this.props.attempt : "Nobody won(");
		return (
			<div className="win_screen">
				<h1 className="win_screen--win_text t_center"> { winText } </h1>
				<h1 className="win_screen--correct_answer t_center">correct answer was:</h1>
				<div className="win_screen--correct_song window">
					<SongPreview songData={ this.props.winner_song } />
				</div>
				<div className="win_screen--songs_list window scrollable">
					{ listSongs }
				</div>
			</div>
		);
	}
}

export default WinScreen;