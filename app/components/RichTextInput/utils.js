export function uploadImageCallBack(file) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
      xhr.open('POST', process.env.RB_CLOUDINARY_UPLOAD_URL);
      const data = new FormData(); // eslint-disable-line no-undef

      data.append('file', file);
      data.append('api_key', process.env.RB_CLOUDINARY_API_KEY);
      data.append('upload_preset', process.env.RB_CLOUDINARY_UPLOAD_PRESET);


      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);

        resolve({ data: { link: response.url } });
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    },
  );
}
