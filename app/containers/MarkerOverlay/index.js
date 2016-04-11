/*
 *
 * MarkerOverlay
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';
import markersSelector from 'markersSelector';
import projectSelector from 'projectSelector';
import { addMarker } from './actions';
import Marker from 'Marker';

// import styles from './styles.css';

class MarkerOverlay extends React.Component {

  onAddMarker = (e) => {
    this.props.addMarker(e, this.props.project.id);
  };

  render() {
    console.error('markers are', this.props.markers);
    return (
      <div className="markers-container">
        <div className="marker-wrapper" onClick={this.onAddMarker}>
          <div className="markers">
            {
              this.props.markers.map((m) => {
                return <Marker marker={m} key={m.get('id')} />;
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
    addMarker: (e, projectId) => {
      const relX = e.pageX - e.target.getBoundingClientRect().left;
      const relY = e.pageY - e.target.getBoundingClientRect().top;
      console.log('position', relX, relY);

      dispatch(addMarker({
        projectId,
        id: Math.floor(Math.random() * 1000),
        x: relX / e.target.parentElement.clientWidth,
        y: relY / e.target.parentElement.clientHeight,
      }));
    },
  };
}

export default connect(createSelector([markersSelector, projectSelector],
  (markers, project) => {
    return {
      markers: markers.get('items'),
      project: project.get('project'),
    };
  },
), mapDispatchToProps)(MarkerOverlay);
