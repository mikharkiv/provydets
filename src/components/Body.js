import React, {Component} from 'react';
import {requestAudd} from './Logic'

function Body() {
    return (
        <section className="App-body">
            <Inputs/>
        </section>
    );
}

function Inputs() {
    return (
        <div className="input">
            <Listen/>
            <div className="or">
                OR
            </div>
            <Type/>
        </div>
    )
}

function Listen() {
    return (
        <div className="listen">
            <img src="./res/mic.svg" alt="" className="mic"></img>
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

class Type extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        requestAudd(null, 'findLyrics', this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="type">
                <form onSubmit={this.handleSubmit}>
                    <img src="./res/lyrics.svg" alt="" className="lyrics"></img>
                    <textarea className="textarea" rows="2" placeholder="Your lyrics..." onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Body;  