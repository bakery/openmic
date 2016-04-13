/**
*
* SharingBar
*
*/

import React from 'react';

class SharingBar extends React.Component {

  onFocus = (e) => {
    e.target.select();
  };

  twitterShareUrl = (text, url) => {
    const b = 'https://twitter.com/intent/tweet?';
    return `${b}text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  };

  facebookShareUrl = (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  render() {
    const url = `${window.location.protocol}//${window.location.host}/p/${this.props.projectId}`;
    return (
      <div className="sharing-wrapper">
        <ul className="sharing-bar">
          <li>Share:</li>
          <li className="openmic">
            <input onFocus={this.onFocus} className="share-url" type="text" readOnly value={url} />
          </li>
          <li><a target="_blank" href={this.facebookShareUrl(url)} className="facebook"></a></li>
          <li><a href={this.twitterShareUrl('Check this out', url)} className="twitter"></a></li>
        </ul>
      </div>
    );
  }
}

export default SharingBar;
