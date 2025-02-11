const User = require("../../../models/user");

const createUser = async ({ firstName, lastName, email, password }) => {
  const user = new User({
    firstName,
    lastName,
    email,
    password,
  });

  return await user.save();
};

module.exports = createUser;
