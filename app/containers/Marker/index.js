/**
*
* Marker
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import SoundButton from 'SoundButton';
import { requestAudioRecording } from 'MarkerOverlay/actions';
import { MARKER_STATE } from 'MarkerOverlay/constants';

class Marker extends React.Component {
  onRecord = (e) => {
    e.stopPropagation();
    this.props.onRecord(this.props.id);
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
    return (
      <div onClick={this.onClick} className={this.generateClassName()} style={styles}>
        <SoundButton sound={this.props.sound} onRecord={this.onRecord} />
        <div className="countdown"></div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onRecord: (markerId) => dispatch(requestAudioRecording(markerId)),
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
