/* eslint-disable new-cap */

const s3BrowserDirectUpload = require('s3-browser-direct-upload');
const url = require('url');

const s3clientOptions = {
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: process.env.AWS_REGION,
  signatureVersion: 'v4',
};

const s3client = new s3BrowserDirectUpload(s3clientOptions);

const middleware = (req, res) => {
  const urlParts = url.parse(req.url, true);
  const query = urlParts.query;

  console.error('query is', query);

  const uploadPostFormOptions = {
    key: query.file,
    bucket: process.env.S3_BUCKET_NAME,
  };

  s3client.uploadPostForm(uploadPostFormOptions, (err, params) => {
    res.send(params);
    console.log(params);
  });
};

module.exports = middleware;
