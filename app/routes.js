/* istanbul ignore next */

// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the require.ensure code splitting business

import Browser from 'browser';

const browserNotSupportedPath = '/oops';

const checkBrowser = function requireAuth(nextState, replace) {
  if (nextState.location.pathname !== browserNotSupportedPath) {
    if (!Browser.isBrowserSupported()) {
      replace({ pathname: browserNotSupportedPath });
    }
  }
};

export default function createRoutes(store) { // eslint-disable-line
  return [
    {
      path: '/',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('HomePage').default);
        }, 'HomePage');
      },
    }, {
      path: '/p/:id',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('Project').default);
        }, 'Project');
      },
    }, {
      path: browserNotSupportedPath,
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('BrowserNotSupported').default);
        }, 'BrowserNotSupported');
      },
    }, {
      path: '*',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('NotFoundPage').default);
        }, 'NotFoundPage');
      },
    },
  ].map((route) => Object.assign(route, { onEnter: checkBrowser }));
}
