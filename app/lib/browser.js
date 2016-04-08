export default {
  isBrowserSupported: () => {
    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
      return navigator.userAgent.match(
          /(firefox|safari)/i
      );
    }

    return false;
  },

  canRecord: () => {
    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
      return navigator.userAgent.match(
          /(firefox|safari)/i
      );
    }

    return false;
  },

  canRecordWithHTML5: () => {
    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
      return (typeof chrome !== 'undefined');
    }

    return false;
  },
};
