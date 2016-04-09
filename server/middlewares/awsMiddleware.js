var s3BrowserDirectUpload = require('s3-browser-direct-upload');

const s3clientOptions = {
  accessKeyId: 'AKIAIPPCY5MB537DPZBQ',
  secretAccessKey: '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',
  region: 'us-east-1',
  signatureVersion: 'v4',
};

const s3client = new s3BrowserDirectUpload(s3clientOptions, ['jpg', 'png']);

const middleware = (req, res) => {
  const uploadPostFormOptions = {
    key: 'filename.png',
    bucket: 'openmic-awakening',
    // extension: 'ext', // optional (pass if You want to check with allowed extensions or set ContentType)
    // acl: 'public-read', // optional, default: 'public-read'
    // expires: new Date('2018-01-01'), // optional (date object with expiration date for urls), default: +60 minutes
    // algorithm: 'AWS4-HMAC-SHA256', // optional, default: 'AWS4-HMAC-SHA256'
    // region: 'eu-central-1', // optional, default: s3client.region
    // conditionMatching: [
    //   {"success_action_redirect": "http://google.com"},
    //   {"x-amz-meta-metadatafield": ""},
    //   ["starts-with", "$key", "user/betty/"],
    //   ["condition", "key", "pattern"]
    // ] // optional
  };

  s3client.uploadPostForm(uploadPostFormOptions, (err, params) => {
    res.send(params);

    console.log(params);
    // params contain all the data required to build browser-based form for direct upload (check API Documentation)
  });
};

module.exports = middleware;
