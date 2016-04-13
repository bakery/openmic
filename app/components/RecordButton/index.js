/* eslint-disable react/prefer-stateless-function */

/**
*
* RecordButton
*
*/

import React from 'react';

class RecordButton extends React.Component {
  render() {
    const handleClick = (e) => {
      e.stopPropagation();
      if (this.props.recording) {
        this.props.onStopRecording.call(this);
      } else {
        this.props.onRecord.call(this);
      }
    };

    return (
      <div className="button-container">
        <button onClick={ handleClick } className="record"></button>
      </div>
    );
  }
}

RecordButton.propTypes = {
  onRecord: React.PropTypes.func.isRequired,
  onStopRecording: React.PropTypes.func.isRequired,
  recording: React.PropTypes.bool.isRequired,
};

export default RecordButton;
