/**
*
* Marker
*
*/

import React from 'react';
// import styles from './marker.css';

class Marker extends React.Component {
  render() {
    const markerWidth = 48;
    const markerHeight = 50;
    const x = Math.floor(100 * this.props.x);
    const y = Math.floor(100 * this.props.y);
    const styles = {
      left: `${x}%`,
      top: `${y}%`,
      marginLeft: -markerWidth / 2,
      marginTop: -markerHeight / 2,
      width: markerWidth,
      height: markerHeight,
      // this.buttonContainer.show(new SoundButton({ model : this.model }));
    };
    return (
      <div className="marker normal" style={styles}>
        <div className="button-container"></div>
        <div className="countdown"></div>
      </div>
    );
  }
}

export default Marker;
