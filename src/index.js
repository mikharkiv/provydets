import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Modal from "react-modal"
import GreenAudioPlayer from 'green-audio-player';

Modal.setAppElement(document.getElementById('root'))

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

GreenAudioPlayer.init({
	selector: '.player--audio'
});