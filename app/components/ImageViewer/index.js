/**
*
* ImageViewer
*
*/

import React from 'react';
// import styles from './image-viewer.css';

class ImageViewer extends React.Component {
  render() {
    // hidden
    return (
      <div className="image-container">
        <div className="image-viewer">
          <img width="100%" className="the-image" src={decodeURIComponent(window.location.search.split('image=')[1])} />
        </div>
      </div>
    );
  }
}

export default ImageViewer;
