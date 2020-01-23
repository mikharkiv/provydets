import React from 'react';

function Body() {
  return (
    <section className="App-body">
      <Inputs />
    </section>
  );
}

function Inputs() {
  return (
    <div className="input">
      <Listen />
      <div class="or">
        OR
      </div>
      <Type />
    </div>
  )
}

function Listen() {
  return (
    <div className="listen">
      <img src="./res/mic.svg" className="mic"></img>
      <div className="audio-type-selection">
        <button className="button">
          Song
        </button>
        <button className="button">
          Humming
        </button>
      </div>
    </div>
  )
}
function Type() {
  return (
    <div className="type">
      <img src="./res/lyrics.svg" className="lyrics"></img>
      <textarea className="textarea" rows="2" placeholder="Your lyrics..." >
      </textarea>
    </div>
  )
}

export default Body;  