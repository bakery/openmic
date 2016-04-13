/* eslint-disable react/prefer-stateless-function */

/**
*
* PlayButton
*
*/

import React from 'react';

class PlayButton extends React.Component {
  render() {
    const handlePlay = (e) => {
      e.stopPropagation();
      this.props.onPlay.call(this);
    };

    const handlePause = (e) => {
      e.stopPropagation();
      this.props.onPause.call(this);
    };

    return (
      <div>
        <button onClick={handlePlay} className="play" title="Hold down button to delete."></button>
        <button onClick={handlePause} className="pause"></button>
      </div>
    );
  }
}

PlayButton.propTypes = {
  onPlay: React.PropTypes.func.isRequired,
  onPause: React.PropTypes.func.isRequired,
};

export default PlayButton;
