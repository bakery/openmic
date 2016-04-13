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

class MarkerOverlay extends React.Component {

  onAddMarker = (e) => {
    if (!this.props.readOnly) {
      this.props.addMarker(e, this.props.project.id);
    }
  };

  render() {
    return (
      <div className="markers-container">
        <div className="marker-wrapper" onClick={this.onAddMarker}>
          <div className="markers">
            {
              this.props.markers.map(
                (m) => <Marker readOnly={this.props.readOnly} marker={m} key={m.get('id')} />
              )
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

      dispatch(addMarker({
        projectId,
        id: Math.floor(Math.random() * 1000),
        x: relX / e.target.parentElement.clientWidth,
        y: relY / e.target.parentElement.clientHeight,
      }));
    },
  };
}

function selectMarkersAndProject(markers, project) {
  return {
    markers: markers.get('items'),
    project: project.get('project'),
  };
}

export default connect(
  createSelector([markersSelector, projectSelector], selectMarkersAndProject),
  mapDispatchToProps
)(MarkerOverlay);
