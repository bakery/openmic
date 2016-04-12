/**
*
* BrowserNotSupported
*
*/

import React from 'react';

function BrowserNotSupported() {
  return (
    <div className="browser">
      <div className="branding">
        <a href="/"><h1>openmic</h1></a>
        <div className="logo"></div>
        <h4 className="tagline">Give voice to images.</h4>
      </div>
      <h3>Sorry but we currently do not support your browser.</h3><h3>You can enjoy Openmic on desktop Chrome (49+) and latest Firefox.</h3>
      <p>All hate email goes <a href="mailto:hi@thebakery.io">here</a>. Have a nice day!</p>
    </div>
  );
}

export default BrowserNotSupported;
