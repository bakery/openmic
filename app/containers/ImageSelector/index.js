/*
 *
 * ImageSelector
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { uploadImage } from './actions';
import imageUploaderSelector from 'imageUploaderSelector';
import { createSelector } from 'reselect';
import { UPLOADER_STATUS } from './constants';

class ImageSelector extends React.Component {
  render() {
    console.error('status is', this.props.status);
    const loadingOrDone = [UPLOADER_STATUS.UPLOADING, UPLOADER_STATUS.COMPLETE];
    if (loadingOrDone.indexOf(this.props.status) !== -1) {
      return (
        <div id="dropzone">
          <h3 className="dropMessage">Uploading...</h3>
          <div className="loading"></div>
          <div className="shadow"></div>
        </div>
      );
    }

    return (
      <Dropzone onDrop={this.props.onUploadFile} multiple={false} accept="image/*" style={{}}>
        <div id="dropzone" className="drop">
          <h3 className="dropmessage">Drop an image<br />and pick up the mic</h3>
        </div>
      </Dropzone>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onUploadFile: (files) => {
      console.error('uploading', files);
      dispatch(uploadImage(files[0]));
    },
  };
}

export default connect(createSelector(
 imageUploaderSelector,
  (uploader) => ({ status: uploader.get('status') })
), mapDispatchToProps)(ImageSelector);
