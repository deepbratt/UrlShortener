export const API_URL = "https://urlshortner07.herokuapp.com/api/urls";
export const SITE_URL = "http://localhost:3000/";
export const isUrlValid = (input) => {
  var res = input.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g
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
