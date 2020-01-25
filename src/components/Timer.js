import React, {Component} from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sec: 0,
            min: 0,
            hour: 0,
            isOn: false
        };
    }

    start() {
        this.clear()
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    pause() {
        clearInterval(this.timerID);
    }

    clear(){
        this.setState({
            sec: 0,
            min: 0,
            hour: 0
        });
    }

    /*
        componentDidMount() {
            this.start()
        }
*/
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

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (nextProps.run == true) {
            if (!nextState.isOn) {
                this.start()
                this.setState({isOn: true})
            }
        }
        if (nextProps.run == false && nextState.isOn) {
            this.setState({isOn: false})
            this.pause()
        }
    }

    render() {
        return (
            <div className="timer">
                <div className="timer--point"></div>
                <p className="timer--label uppercase">{this.state.min}:{this.state.sec}</p>
            </div>
        )
    }
}

export {Timer}