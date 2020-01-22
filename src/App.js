import React from 'react';
import './App.css';
import Body from './Body'

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      Provydets'
    </header>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>Development team:
        Mykhailo Postnikov
        Vadym Nakytniak
        Kyrylo Turina
      </p>
    </footer>
  );
}

export default App;
