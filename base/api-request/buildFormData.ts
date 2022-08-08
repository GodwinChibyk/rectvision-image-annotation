export const buildFormData = (body: any) => {
  const formData = new FormData();

  const bodyKeys = Object.keys(body);

  bodyKeys.forEach((key) => {
    // console.log(key, body[key]);
    if (body[key] instanceof Array) {
      for (let value of body[key]) {
        formData.append(`${key}`, value);
      }
    } else {
      formData.append(key, body[key]);
    }
  });

  body = formData;

  return body;
};
