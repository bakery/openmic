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

// import styles from './styles.css';

class ImageSelector extends React.Component {
  render() {
    console.error('status is', this.props.status);
    if (this.props.status === UPLOADER_STATUS.UPLOADING) {
      return (
        <div id="dropzone" className="loading"></div>
      );
    }

    return (
      <Dropzone onDrop={this.props.onUploadFile} multiple={false} accept="image/*" style={{}}>
        <div id="dropzone">
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
      dispatch(uploadImage(files));
    },
  };
}

export default connect(createSelector(
 imageUploaderSelector,
  (uploader) => ({ status: uploader.get('status') })
), mapDispatchToProps)(ImageSelector);
