import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Modal from "react-modal"

Modal.setAppElement(document.getElementById('root'))

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();