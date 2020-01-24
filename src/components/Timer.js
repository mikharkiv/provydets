import React, {Component} from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sec: 0,
            min: 0,
            hour: 0
        };
    }

    start(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    pause(){
        clearInterval(this.timerID);
    }

    componentDidMount() {
        this.start()
    }

    componentWillUnmount() {
        this.pause()
    }

    tick() {
        let s = (this.state.sec + 1) >= 60 ? 0 : (this.state.sec + 1);
        let m = this.state.min;
        let h = this.state.hour;
        if ((this.state.sec + 1) >= 60) {
            m = (this.state.min + 1) >= 60 ? 0 : (this.state.min + 1);
        }
        if ((this.state.min + 1) >= 60) {
            let h = (this.state.hour + 1) >= 60 ? 0 : (this.state.hour + 1);
        }
        this.setState({
            sec: s,
            min: m,
            hour: h
        });
    }

    render() {
        return(
            <div>
                <h1>{this.state.hour}:{this.state.min}:{this.state.sec}</h1>
            </div>
        )
    }
}

export {Timer}