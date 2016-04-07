/**
*
* Marker
*
*/

import React from 'react';
// import styles from './marker.css';
import SoundButton from 'SoundButton';

class Marker extends React.Component {
  onClick = (e) => {
    e.stopPropagation();
    console.error('marker is clicked');
  };

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
    const className = `marker ${this.props.sound ? 'normal' : 'ready-to-record'}`;

    return (
      <div onClick={this.onClick} className={className} style={styles}>
        <SoundButton sound={this.props.sound} />
        <div className="countdown"></div>
      </div>
    );
  }
}

export default Marker;
