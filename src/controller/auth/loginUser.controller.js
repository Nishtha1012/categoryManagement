const { buildErrObject } = require("../../utils/buildErrorObject");
const getValidatedData = require("../../utils/getValidatedData");
const { handleError } = require("../../utils/handleError");
const getUserByEmail = require("../../utils/getUserByEmail");
const comparePassword = require("../../utils/comparePassword");
const { generateToken } = require("../../utils/generateToken");

const loginUser = async (req, res) => {
  try {
    const request = getValidatedData(req);

    const user = await getUserByEmail(request.email);

    if (!user) {
      throw buildErrObject(401, "USER_NOT_EXIST");
    }

    const isMatch = await comparePassword(request.password, user.password);

    if (!isMatch) throw buildErrObject(409, "PASSWORD_IS_INCORRECT");

    const token = generateToken(user._id);
    delete user.password;

    res
      .cookie("authToken", token, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      })
      .status(200)
      .json(user);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = loginUser;
