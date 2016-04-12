/**
*
* Toolbar
*
*/

import React from 'react';
import RecordingIndicator from 'RecordingIndicator';
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

  render() {
    return (
      <div className="toolbar-wrapper">
        <div className="toolbar collapsed">
          <div className="shelf"></div>
          <div className="readonly-container"></div>
          <div className="handle">
            <h3 className=""><a href="/">openmic</a></h3>
            { this.recordingIndicator() }
            <div className="loader"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  projectSelector,
  (project) => {
    return {
      recording: project.get('recording'),
      loading: project.get('loading'),
      maxRecordingTime: 15 * 1000,
    };
  },
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
