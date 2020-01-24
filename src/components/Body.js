import React, {Component} from 'react';
import 'mic-recorder-to-mp3' ;
import {requestAudd} from './Logic'

const MicRecorder = require('mic-recorder-to-mp3');

// New instance
const recorder = new MicRecorder({
    bitRate: 128
});

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

class Listen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isRecording: false,
            isDisabled:true
        };
        this.record = this.record.bind(this);
    }

    record() {

        if (this.state.isRecording) {
            this.stop()
            this.setState({isRecording: false})
        } else {
            this.setState({isDisabled:false})
            this.start()
            this.setState({isRecording:true})
        }
    }

    start() {
        console.log("Start recording...");
        recorder.start().then(() => {
        }).catch((e) => {
            console.error(e);
        });
    }

    stop() {
        console.log("Stop recording...\nSending Request...");
        recorder.stop().getMp3().then(([buffer, blob]) => {
            const file = new File(buffer, 'voice_sample.mp3', {
                type: blob.type,
                lastModified: Date.now()
            });

            const player = new Audio(URL.createObjectURL(file));
            player.play()

            //requestAudd(file)

        }).catch((e) => {
            alert('We could not retrieve your message');
            console.log(e);
        });
    }

    render() {
        return (
            <div className="listen">
                <p>Press the mic <br/>
                To start recording</p>
                <img src="./res/mic.svg" alt="" className="mic" onClick={this.record}></img>
                <div className="audio-type-selection">
                    <button className="button" disabled={this.state.isDisabled}>
                        Song
                    </button>
                    <button className="button" disabled={this.state.isDisabled}>
                        Humming
                    </button>
                </div>
            </div>
        )
    }
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