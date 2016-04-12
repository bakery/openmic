/**
*
* Toolbar
*
*/

import React from 'react';
import RecordingIndicator from 'RecordingIndicator';
import LoadingIndicator from 'LoadingIndicator';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import projectSelector from 'projectSelector';

class Toolbar extends React.Component {
  recordingIndicator = () => {
    if (this.props.recording) {
      return <RecordingIndicator maxRecordingTime={this.props.maxRecordingTime} />;
    }

    return null;
  };

  loadingIndicator = () => {
    if (this.props.loading) {
      return <LoadingIndicator />;
    }

    return null;
  };

  render() {
    return (
      <div className="toolbar-wrapper">
        <div className="toolbar collapsed">
          <div className="shelf"></div>
          <div className="readonly-container"></div>
          <div className="handle">
            <h3 className=""><a href="/">openmic</a></h3>
            { this.recordingIndicator() }
            { this.loadingIndicator() }
          </div>
        </div>
      </div>
    );
  }
}

function selectProjectAttributes(project) {
  return {
    recording: project.get('recording'),
    loading: project.get('loading'),
    maxRecordingTime: 15 * 1000,
  };
}

const mapStateToProps = createSelector(
  projectSelector, selectProjectAttributes);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
