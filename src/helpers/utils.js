export function getFormBody(params) {
  let formBody = [];
  console.log(params);
  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody.join("&");
}

export function getAuthToken() {
  return localStorage.getItem("token");
}
