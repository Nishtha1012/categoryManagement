const User = require("../models/user");

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  console.log("🚀 ~ getUserByEmail ~ user:", user);
  return user ? user.toObject() : user;
};

module.exports = getUserByEmail;
