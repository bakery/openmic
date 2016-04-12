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
  content = () => {
    if (!this.props.loading) {
      return (
        <div>
          <div className="image-container-wrapper">
            <div className="frame">
              <ImageViewer url={this.props.project.image} />
              <MarkerOverlay readOnly={this.props.readOnly} />
              <div className="tutorial-wrapper"></div>
            </div>
          </div>
          <SharingBar />
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

const mapStateToProps = createSelector(
    projectSelector,
    (project) => {
      return {
        loading: project.get('loading'),
        project: project.get('project'),
        readOnly: project.get('readOnly'),
      };
    },
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
