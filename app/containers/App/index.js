/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

function App(props) {
  return (
    <div>
      { props.children }
      <footer>
        <ul>
          <li><a href="mailto:hi@thebakery.io">Say hi</a></li>
          <li><a target="_blank" href="http://thebakery.io">Made by The Bakery</a></li>
          <li>&copy; {new Date().getFullYear()}</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
