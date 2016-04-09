import 'whatwg-fetch';

const getRequestData = () => {
  return fetch('/aws/sign').then((response) => {
    return response.json();
  });
};

export default {
  upload: (file) => {
    getRequestData().then((data) => {
      console.error('got data for request', data);
      // const input = document.querySelector('input[type="file"]');

      const formData = new FormData();
      formData.append('acl', data.params.acl);
      formData.append('key', data.params.key);
      formData.append('policy', data.params.policy);
      formData.append('x-amz-algorithm', data.params['x-amz-algorithm']);
      formData.append('x-amz-credential', data.params['x-amz-credential']);
      formData.append('x-amz-date', data.params['x-amz-date']);
      formData.append('x-amz-signature', data.params['x-amz-signature']);
      formData.append('file', file);

      fetch(data.form_url, {
        method: 'post',
        body: formData,
      }).then((d) => {
        console.error(d);
      });
    });
  },
};
