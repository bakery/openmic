/* eslint-disable react/prefer-stateless-function */

/*
 *
 * RecordingIndicator
 *
 */

import React from 'react';

class RecordingIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      tick: 1000,
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, this.state.tick);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ duration: this.state.duration + this.state.tick });
  }

  render() {
    const left = (this.props.maxRecordingTime - this.state.duration) / 1000;
    const seconds = left % 60;
    const minutes = Math.floor(left / 60);

    return (
      <div className="recording-indicator">
        REC <span className="time">{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</span>
      </div>
    );
  }
}

export default RecordingIndicator;
