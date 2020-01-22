import React from 'react';

function Body() {
  return(
    <section className="App-body">
      <Scoreboard/>
      <Inputs/>
    </section>
  );
}

function Scoreboard() {
  return(
    <div className="scoreboard">
      <Score name="PC" score="0"></Score>
      <Score name="Player" score="0"></Score>
    </div>
  )
}

function Inputs() {
  return(
    <div className="input">
      <Listen/>
    </div>
  )
}

function Listen() {
  return(
    <button className="listen">
      
    </button>
  )
}

class Score extends React.Component{
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

export default Body;  