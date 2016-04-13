/**
*
* MarkerDeleteCountdown
*
*/

import React from 'react';

class MarkerDeleteCountdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 3 };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ counter: this.state.counter > 0 ? this.state.counter - 1 : 0 });
  }

  render() {
    return (
      <div className="countdown">{this.state.counter}</div>
    );
  }
}

export default MarkerDeleteCountdown;
