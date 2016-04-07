/**
*
* Editor
*
*/

import React from 'react';
// import styles from './styles.css';
import Toolbar from 'Toolbar';
import SharingBar from 'SharingBar';
import ImageViewer from 'ImageViewer';
import MarkerOverlay from 'MarkerOverlay';

function Editor() {
  return (
    <div className="editor">
      <div className="permission-helper-wrapper"></div>
      <Toolbar />
      <div className="image-container-wrapper">
        <div className="frame">
          <ImageViewer />
          <MarkerOverlay />
          <div className="tutorial-wrapper"></div>
        </div>
      </div>
      <SharingBar />
    </div>
  );
}

export default Editor;
