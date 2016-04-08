/**
*
* Marker
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import RecordButton from 'RecordButton';
import PlayButton from 'PlayButton';
import {
  requestAudioRecording,
  stopAudioRecording,
  playSound,
  pauseSound,
} from 'MarkerOverlay/actions';
import { MARKER_STATE } from 'MarkerOverlay/constants';

class Marker extends React.Component {
  onRecord = () => {
    this.props.record(this.props.id);
  };

  onStopRecording = () => {
    this.props.stopRecording(this.props.id);
  };

  onPlay = () => {
    this.props.play(this.props.id, this.props.sound);
  };

  onPause = () => {
    this.props.pause(this.props.id, this.props.sound);
  };

  getMarkerButton = () => {
    if (this.props.sound) {
      return <PlayButton sound={this.props.sound} onPlay={this.onPlay} onPause={this.onPause} />;
    }

    const isRecording = this.props.state === MARKER_STATE.RECORDING;
    return <RecordButton recording={isRecording} onRecord={this.onRecord} onStopRecording={this.onStopRecording} />;
  };

  generateClassName = () => {
    const base = 'marker';

    if (this.props.state === MARKER_STATE.RECORDING) {
      return `${base} recording`;
    }

    if (this.props.state === MARKER_STATE.PLAYING) {
      return `${base} playing`;
    }

    if (this.props.sound) {
      return `${base} normal`;
    }

    return `marker ${base} ready-to-record`;
  };

  render() {
    console.error('marker props are', this.props);

    const markerWidth = 48;
    const markerHeight = 50;
    const x = Math.floor(100 * this.props.x);
    const y = Math.floor(100 * this.props.y);
    const styles = {
      left: `${x}%`,
      top: `${y}%`,
      marginLeft: -markerWidth / 2,
      marginTop: -markerHeight / 2,
      width: markerWidth,
      height: markerHeight,
    };

    return (
      <div onClick={this.onClick} className={this.generateClassName()} style={styles}>
        {this.getMarkerButton()}
        <div className="countdown"></div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    record: (markerId) => dispatch(requestAudioRecording(markerId)),
    stopRecording: (markerId) => dispatch(stopAudioRecording(markerId)),
    play: (markerId, sound) => dispatch(playSound(markerId, sound)),
    pause: (markerId, sound) => dispatch(pauseSound(markerId, sound)),
  };
}

export default connect(createSelector(
  (state, props) => {
    console.error('first selector', state.get('markers').get('items'), props);
    return state.get('markers').get('items').get(props.id);
  },
  (marker) => ({
    state: marker.get('state'),
    sound: marker.get('sound'),
  })
), mapDispatchToProps)(Marker);
