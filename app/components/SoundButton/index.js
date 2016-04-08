/*
 *
 * SoundButton
 *
 */

import React from 'react';

class SoundButton extends React.Component {
  render() {
    if (this.props.sound) {
      return (
        <div className="button-container">
          <button className="play" title="Hold down button to delete."></button>
          <button className="pause"></button>
        </div>
      );
    }

    return (
      <div className="button-container">
        <button onClick={ this.props.onRecord } className="record"></button>
      </div>
    );
  }
}

SoundButton.propTypes = {
  // className: React.PropTypes.string,
  // handleRoute: React.PropTypes.func,
  // href: React.PropTypes.string,
  onRecord: React.PropTypes.func.isRequired,
};

export default SoundButton;
