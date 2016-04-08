/**
*
* Marker
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
// import SoundButton from 'SoundButton';
import RecordButton from 'RecordButton';
import { requestAudioRecording, stopAudioRecording } from 'MarkerOverlay/actions';
import { MARKER_STATE } from 'MarkerOverlay/constants';

class Marker extends React.Component {
  onRecord = () => {
    this.props.record(this.props.id);
  };

  onStopRecording = () => {
    this.props.stopRecording(this.props.id);
  };

  generateClassName = () => {
    const base = 'marker';

    if (this.props.sound) {
      return `${base} normal`;
    }

    if (this.props.state === MARKER_STATE.RECORDING) {
      return `${base} recording`;
    }

    return `${base} ready-to-record`;
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
    const isRecording = this.props.state === MARKER_STATE.RECORDING;

    return (
      <div onClick={this.onClick} className={this.generateClassName()} style={styles}>
        <RecordButton recording={isRecording} onRecord={this.onRecord} onStopRecording={this.onStopRecording}/>
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
  };
}

export default connect(createSelector(
  (state, props) => {
    console.error('first selector', state.get('markers').get('items'), props);
    return state.get('markers').get('items').get(props.id);
  },
  (marker) => ({
    state: marker.get('state'),
  })
), mapDispatchToProps)(Marker);
