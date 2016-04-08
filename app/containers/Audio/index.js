/*
 *
 * Audio
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';
import audioSelector from 'audioSelector';


class Audio extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = createSelector(
    audioSelector
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio);
