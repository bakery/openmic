/**
*
* Marker
*
*/

import React from 'react';
import { connect } from 'react-redux';
// import { createSelector } from 'reselect';
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
    this.props.record(this.props.marker.toJSON());
  };

  onStopRecording = () => {
    this.props.stopRecording(this.props.marker.toJSON());
  };

  onPlay = () => {
    this.props.play(this.props.marker.toJSON());
  };

  onPause = () => {
    this.props.pause(this.props.marker.toJSON());
  };

  getMarkerButton = () => {
    if (this.props.marker.get('sound')) {
      return <PlayButton sound={this.props.marker.get('sound')} onPlay={this.onPlay} onPause={this.onPause} />;
    }

    const isRecording = this.props.marker.get('state') === MARKER_STATE.RECORDING;
    console.error('@@@ isRecording', isRecording);
    return <RecordButton recording={isRecording} onRecord={this.onRecord} onStopRecording={this.onStopRecording} />;
  };

  generateClassName = () => {
    const base = 'marker';

    if (this.props.marker.get('state') === MARKER_STATE.RECORDING) {
      return `${base} recording`;
    }

    if (this.props.marker.get('state') === MARKER_STATE.PLAYING) {
      return `${base} playing`;
    }

    if (this.props.marker.get('sound')) {
      return `${base} normal`;
    }

    return `marker ${base} ready-to-record`;
  };

  render() {
    console.error('marker props are', this.props);

    const marker = this.props.marker;

    const markerWidth = 48;
    const markerHeight = 50;
    const x = Math.floor(100 * marker.get('x'));
    const y = Math.floor(100 * marker.get('y'));
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
    record: (marker) => dispatch(requestAudioRecording(marker)),
    stopRecording: (marker) => dispatch(stopAudioRecording(marker)),
    play: (marker) => dispatch(playSound(marker)),
    pause: (marker) => dispatch(pauseSound(marker)),
  };
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(Marker);
