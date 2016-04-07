/**
*
* Toolbar
*
*/

import React from 'react';
// import styles from './styles.css';

function Toolbar() {
  return (
    <div className="toolbar-wrapper">
      <div className="toolbar collapsed">
        <div className="shelf"></div>
        <div className="readonly-container"></div>
        <div className="handle">
          <h3 className=""><a href="/">openmic</a></h3>
          <div className="recording-indicator-container"></div>
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
