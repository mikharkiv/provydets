import React from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import Body from './Body'
import Header from './Header'
import Footer from './Footer'

function App() {
	return (
		<div className="App">
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

export default App;