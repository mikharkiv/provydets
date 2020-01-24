import React, {Component} from 'react';

class SongPreview extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="song_preview">
				<div className="song_preview--image">
					<img className="song_preview--image--img" src={ this.props.song.songPreview } alt={ this.props.song.songTitle }/>
				</div>
				<p className="song_preview--song_title">{ this.props.song.songTitle }</p>
				<p className="song_preview--song_author">{ this.props.song.songAuthor }</p>
			</div>
		);
	}
}
export default SongPreview;