import 'whatwg-fetch';

const getRequestData = (fileName) => {
  const url = `/aws/sign?file=${encodeURIComponent(fileName)}`;
  return fetch(url).then((response) => {
    return response.json();
  });
};

export default {
  upload: (file, fileName) => {
    return new Promise((resolve, reject) => {
      getRequestData(fileName).then((data) => {
        console.error('got data for request', data);
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
          if (d.status >= 200 && d.status < 300) {
            resolve(data.public_url);
          } else {
            reject(d);
          }
          console.error(d);
        });
      });
    });
  },
};
