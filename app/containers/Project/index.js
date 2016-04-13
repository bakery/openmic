/*
 *
 * Project
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import projectSelector from 'projectSelector';
import { reportProjectImageLoaded } from './actions';
import Toolbar from 'Toolbar';
import SharingBar from 'SharingBar';
import ImageViewer from 'ImageViewer';
import MarkerOverlay from 'MarkerOverlay';

class Project extends React.Component {

  onImageLoaded = () => {
    console.error('image loaded');
    this.props.reportProjectImageLoaded(this.props.project);
  };

  content = () => {
    if (!this.props.loading) {
      return (
        <div>
          <div className="image-container-wrapper">
            <div className="frame">
              <ImageViewer onLoad={this.onImageLoaded} url={this.props.project.image} />
              <MarkerOverlay readOnly={this.props.readOnly} />
              <div className="tutorial-wrapper"></div>
            </div>
          </div>
          <SharingBar projectId={this.props.project.id} />
        </div>
      );
    }

    return null;
  };

  render() {
    return (
      <div className="editor">
        <div className="permission-helper-wrapper"></div>
        <Toolbar />
        {this.content()}
      </div>
    );
  }
}

function selectProjectAttributes(project) {
  return {
    loading: project.get('loading'),
    project: project.get('project'),
    readOnly: project.get('readOnly'),
  };
}

const mapStateToProps = createSelector(
  projectSelector, selectProjectAttributes
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    reportProjectImageLoaded: (project) => {
      dispatch(reportProjectImageLoaded(project));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
