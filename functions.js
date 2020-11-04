const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    let user = { firstName: "Kampret" };
    user["lastName"] = "tenan";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        return response.data.name + "kampret";
      })
      .catch((error) => {
        console.log(error);
      }),
};

module.exports = functions;
