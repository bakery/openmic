/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import ImageSelector from 'ImageSelector';
import OctoCat from 'OctoCat';

export function HomePage() {
  return (
    <div className="editor">
      <OctoCat url="https://github.com/thebakeryio/openmic" />
      <div className="permission-helper-wrapper"></div>
      <div className="branding">
        <a href="/"><h1>openmic</h1></a>
        <div className="logo"></div>
        <h4 className="tagline">Give voice to images. [Digital Ocean]</h4>
      </div>
      <div className="landing-container">
        <ImageSelector />
      </div>
    </div>
  );
}

export default HomePage;
