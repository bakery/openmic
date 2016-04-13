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
import { addMarker, clickOutsideOfMarkerOverlay } from './actions';
import Marker from 'Marker';

class MarkerOverlay extends React.Component {
  componentDidMount() {
    document.querySelector('body').addEventListener('click', this.handleBodyClick);
  }

  componentWillUnmount() {
    document.querySelector('body').removeEventListener('click', this.handleBodyClick);
  }

  onAddMarker = (e) => {
    const { readOnly, recording } = this.props;
    if (!readOnly && !recording) {
      this.props.addMarker(e, this.props.project.id);
    }
  };

  handleBodyClick = (e) => {
    if (['markers', 'record'].indexOf(e.target.className) === -1) {
      this.props.dispatch(clickOutsideOfMarkerOverlay());
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
      const scrollTop = Math.max(
        document.querySelector('html').scrollTop,
        document.querySelector('body').scrollTop,
      );
      const relX = e.pageX - e.target.getBoundingClientRect().left;
      const relY = (e.pageY - scrollTop) - e.target.getBoundingClientRect().top;

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
    recording: project.get('recording'),
  };
}

export default connect(
  createSelector([markersSelector, projectSelector], selectMarkersAndProject),
  mapDispatchToProps
)(MarkerOverlay);
