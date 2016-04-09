/*
 *
 * Project
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';
import projectSelector from 'projectSelector';
import Toolbar from 'Toolbar';
import SharingBar from 'SharingBar';
import ImageViewer from 'ImageViewer';
import MarkerOverlay from 'MarkerOverlay';

class Project extends React.Component {
  render() {
    if (this.props.loading) {
      return (
        <div>loading...</div>
      );
    }

    return (
      <div className="editor">
        <div className="permission-helper-wrapper"></div>
        <Toolbar />
        <div className="image-container-wrapper">
          <div className="frame">
            <ImageViewer url={this.props.project.image} />
            <MarkerOverlay />
            <div className="tutorial-wrapper"></div>
          </div>
        </div>
        <SharingBar />
      </div>
    );
  }
}

const mapStateToProps = createSelector(
    projectSelector,
    (project) => {
      return {
        loading: project.get('loading'),
        project: project.get('project'),
      };
    },
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
