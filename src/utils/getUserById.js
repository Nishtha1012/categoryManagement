const User = require("../models/user");

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user ? user.toObject() : user;
};

module.exports = getUserById;
