import React, {Component} from 'react';
import 'mic-recorder-to-mp3' ;
import {requestAudd} from './Logic'
import {Timer} from "./Timer"

const MicRecorder = require('mic-recorder-to-mp3');

// New instance
const recorder = new MicRecorder({
    bitRate: 128
});

class Body extends React.Component {
    componentWillUnmount() {
        console.log("Body")
    }

    render() {
        return (
            <section className="App-body">
                <Inputs callbackFromParent={this.props.callbackFromParent}/>
            </section>
        );
    }
}

class Inputs extends React.Component {
    componentWillUnmount() {
        console.log("Inputs")
    }

    render() {
        return (
            <div className="input">
                <Listen callbackFromParent={this.props.callbackFromParent}/>
                <div className="or">
                    OR
                </div>
                <Type callbackFromParent={this.props.callbackFromParent}/>
            </div>
        )
    }
}

class Listen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isRecording: false,
            isDisabled: true,
            voice_sample: null
        };
        this.record = this.record.bind(this);
        this.songRequest = this.songRequest.bind(this)
        this.hummingRequest = this.hummingRequest.bind(this)
    }

    componentWillUnmount() {
        console.log("Listen")
    }

    record() {
        if (this.state.isRecording) {
            this.stop()
            this.setState({isDisabled: false})
            this.setState({isRecording: false})
        } else {
            this.start()
            this.setState({isRecording: true})
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
        console.log("Stop recording...");
        recorder.stop().getMp3().then(([buffer, blob]) => {
            const file = new File(buffer, 'voice_sample.mp3', {
                type: blob.type,
                lastModified: Date.now()
            });
            this.setState({voice_sample: file})

            //const player = new Audio(URL.createObjectURL(file));
            //player.play()

            //requestAudd(file)

        }).catch((e) => {
            alert('We could not retrieve your message');
            console.log(e);
        });
    }

    songRequest() {
        console.log("Sending song recognition request...");
        //requestAudd(this.state.voice_sample)
        this.props.callbackFromParent("AnswerScreen")
    }

    hummingRequest() {
        console.log("Sending humming recognition request...");
        //requestAudd(this.state.voice_sample,"recognizeWithOffset")
        this.props.callbackFromParent("AnswerScreen")
    }

    render() {
        return (
            <div className="listen">
                <p>Press the mic <br/>
                    To start recording</p>
                <img src="./res/mic.svg" alt="" className="mic" onClick={this.record}/>
                <div>
                    <Timer run={this.state.isRecording}></Timer>
                </div>

                <div className="audio-type-selection">
                    <button className="button" disabled={this.state.isDisabled} onClick={this.songRequest}>
                        Song
                    </button>
                    <button className="button" disabled={this.state.isDisabled} onClick={this.hummingRequest}>
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

    componentWillUnmount() {
        console.log("Type")
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log("Sending humming recognition request...");
        //requestAudd(null, 'findLyrics', this.state.value);
        event.preventDefault();
        this.props.callbackFromParent("AnswerScreen")
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