import React, { Component } from 'react';
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
		const winText = this.props.winner + " won on attempt " + this.props.attempt;

		const songsContainer = this.props.songs.length == 0 ? '' : [<p>songs offered:</p>,
		<div className="win_screen--songs_list window scrollable">
			{listSongs}
		</div>
		]

		const winnerSong = this.props.winner == "User" ? '' : [
			<h1 className="win_screen--correct_answer t_center">correct answer was:</h1>,
			<div className="win_screen--correct_song window">
				<SongPreview songData={this.props.winner_song} />
			</div>
		]
		return (
			<div className="win_screen">
				<h1 className="win_screen--win_text t_center"> {winText} </h1>
				{winnerSong}
				{songsContainer}
			</div>
		);
	}
}

export default WinScreen;