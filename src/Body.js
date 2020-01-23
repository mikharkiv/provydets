import React from 'react';

function Body() {
  return (
    <section className="App-body">
      {/* <Inputs /> HIDDEN TEMPORARILY*/}
    </section>
  );
}

function Inputs() {
  return (
    <div className="input">
      <Listen/>
      <div class="or">
        OR
      </div>
      <Type/>
    </div>
  )
}

function Listen() {
  return (
    <div className="listen">
      <img src="./res/mic.svg" className="mic"></img>
      <button className="listen-button">
        Audio
      </button>
    </div>
  )
}
function Type() {
  return (
    <div className="type">
      <img src="./res/lyrics.svg" className="lyrics"></img>
      <textarea className="listen-button" placeholder="Your lyrics..." >
      </textarea>
    </div>
  )
}

export default Body;  