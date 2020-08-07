export const API_URL = "https://urlshortener05.herokuapp.com/api/urls";
// export const API_URL = "http://localhost:4000/api/urls";
// export const SITE_URL = "http://localhost:3000/";
export const SITE_URL =
  "http://testdeploy5.s3-website.ap-south-1.amazonaws.com/";
export const isUrlValid = (input) => {
  var res = input.match(
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
  );
  if (res == null) return false;
  else return true;
};

export const shortUrlmake = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
