const bcrypt = require("bcrypt");

const comparePassword = async(enteredPassword, userPassword) => {
 return await bcrypt.compare(enteredPassword,userPassword)
};

module.exports = comparePassword;
