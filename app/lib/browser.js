import UAParser from 'ua-parser-js';

export default {
  isBrowserSupported: () => {
    const bi = new UAParser().getResult();
    return (
      (bi.browser.name.match(/chrome/ig) && parseInt(bi.browser.major, 10) >= 49) ||
      (bi.browser.name.match(/firefox/ig) && parseInt(bi.browser.major, 10) >= 25)
    );
  },
};
