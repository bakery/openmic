/**
*
* SharingBar
*
*/

import React from 'react';
// import styles from './styles.css';

function SharingBar() {
  return (
    <div className="sharing-wrapper">
      <ul className="sharing-bar">
        <li>Share:</li>
        <li className="openmic">
          <input className="share-url" type="text" readOnly value="{{openmicURL}}" />
        </li>
        <li><a href="{{facebookURL}}" className="facebook"></a></li>
        <li><a href="{{twitterURL}}" className="twitter"></a></li>
      </ul>
    </div>
  );
}

export default SharingBar;
