/*
 *
 * SoundButton
 *
 */

import React from 'react';
import { connect } from 'react-redux';

// import styles from './styles.css';

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
        <button className="record"></button>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundButton);
