import React from 'react';
import './App.css';
import Body from './Body'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <Score name="pc" score="0" />
      <Buttons />
      <Score name="user" score="0" />
    </header>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>
        Need help? | Developed by Michael Postnikov, Kyrylo Turina, Vadym Nakytnyak, 2020 | GitHub page
      </p>
    </footer>
  );
}

export default App;

class Score extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      score: props.score
    }
  }

  render() {
    return <div className="score">
      {this.state.name}:{this.state.score}
    </div>
  }
}

class Buttons extends React.Component {
  render() {
    return (
      <div className="button-group">
        <Button type="new game" />
        <Button type="reset scores" />
        <Button type="buttons" />
      </div>
    )
  }
}

class Button extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      type: props.type,
    }
  }

  render() {
    return (
      <button className="button" type={this.props.type}>
        {this.props.type}
      </button>
    )
  }
}