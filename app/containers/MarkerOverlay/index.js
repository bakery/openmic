/*
 *
 * MarkerOverlay
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';
import markersSelector from 'markersSelector';
import { addMarker } from './actions';
import Marker from 'Marker';

// import styles from './styles.css';

class MarkerOverlay extends React.Component {
  render() {
    console.error('markers are', this.props.markers);
    return (
      <div className="markers-container">
        <div className="marker-wrapper" onClick={this.props.onAddMarker}>
          <div className="markers">
            {
              this.props.markers.map((m) => {
                return <Marker x={m.get('x')} y={m.get('y')} key={m.get('id')} id={m.get('id')} />;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onAddMarker: (e) => {
      const relX = e.pageX - e.target.getBoundingClientRect().left;
      const relY = e.pageY - e.target.getBoundingClientRect().top;
      console.log('position', relX, relY);

      dispatch(addMarker({
        id: Math.floor(Math.random() * 1000),
        x: relX / e.target.parentElement.clientWidth,
        y: relY / e.target.parentElement.clientHeight,
      }));
    },
  };
}

export default connect(createSelector(markersSelector,
  (markerOverlay) => ({ markers: markerOverlay.get('items') })
), mapDispatchToProps)(MarkerOverlay);
