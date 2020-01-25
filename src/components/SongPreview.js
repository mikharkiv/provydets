import React, {Component} from 'react';
import '../styles/SongPreview.scss';

class SongPreview extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="song_preview">
				<div className="song_preview--image">
					<img className="song_preview--image--img" src={ this.props.songData.album.cover_medium } alt={ this.props.songData.title }/>
				</div>
				<div className="song_preview--title_container">
					<p className="song_preview--song_title">{ this.props.songData.title }</p>
					<p className="song_preview--song_author">{ this.props.songData.artist.name }</p>
				</div>
			</div>
		);
	}
}
export default SongPreview;