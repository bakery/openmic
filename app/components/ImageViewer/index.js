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
          <img width="100%" className="the-image" src="http://images6.fanpop.com/image/photos/33400000/Cute-Cats-cats-33440930-1280-800.jpg" />
        </div>
      </div>
    );
  }
}

export default ImageViewer;
