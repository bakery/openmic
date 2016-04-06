/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import ImageSelector from 'ImageSelector';

// TODO: check for browser capability
// <div class="landing-container">
//   {{#if canRecord}}
//   {{else}}
//     <h2>You cannot record anything but you can check out some popular sounds</h2>
//   {{/if}}
// </div>

export function HomePage() {
  return (
    <div className="editor">
      <div className="permission-helper-wrapper"></div>
      <div className="branding">
        <a href="/"><h1>openmic</h1></a>
        <div className="logo"></div>
        <h4 className="tagline">Give voice to images.</h4>
      </div>
      <div className="landing-container">
        <ImageSelector />
      </div>
    </div>
  );
}

export default HomePage;
