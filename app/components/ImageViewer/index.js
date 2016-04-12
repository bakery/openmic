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
          <img onLoad={this.props.onLoad} width="100%" className="the-image" src={this.props.url} />
        </div>
      </div>
    );
  }
}

export default ImageViewer;
