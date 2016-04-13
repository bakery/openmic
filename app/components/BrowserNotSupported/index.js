/**
*
* BrowserNotSupported
*
*/

import React from 'react';
import OctoCat from 'OctoCat';

function BrowserNotSupported() {
  return (
    <div className="browser">
      <OctoCat url="https://github.com/thebakeryio/openmic" />
      <div className="branding">
        <a href="/"><h1>openmic</h1></a>
        <div className="logo"></div>
        <h4 className="tagline">Give voice to images.</h4>
      </div>
      <h3><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder">MediaRecorder API</a> does not work in your browser.</h3><h3>You can try Openmic in your desktop Chrome (49+) and latest Firefox.</h3>
    </div>
  );
}

export default BrowserNotSupported;
