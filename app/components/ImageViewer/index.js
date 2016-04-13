/* eslint-disable react/prefer-stateless-function */

/**
*
* ImageViewer
*
*/

import React from 'react';

class ImageViewer extends React.Component {
  render() {
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
