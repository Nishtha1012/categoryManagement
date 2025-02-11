const { buildErrObject } = require("../../utils/buildErrorObject");
const encryptPassword = require("../../utils/encryptPassword");
const getValidatedData = require("../../utils/getValidatedData");
const { handleError } = require("../../utils/handleError");
const getUserByEmail = require("../../utils/getUserByEmail");
const createUser = require("./services/createUser");

const registerUser = async (req, res) => {
  try {
    const { password, firstName, lastName, email } = getValidatedData(req);

    const user = await getUserByEmail(email);
    console.log("🚀 ~ registerUser ~ user:", user);

    if (user?.email) {
      throw buildErrObject(422, "USER_ALREADY_EXISTS");
    }

    const encryptedPass = await encryptPassword(password);

    const result = await createUser({
      firstName,
      lastName,
      email,
      password: encryptedPass,
    });
    const response = result.toObject();
    delete response.password;

    res.json(response);
  } catch (error) {
    console.log("🚀 ~ registerUser ~ error:", error);
    handleError(res, error);
  }
};

module.exports = registerUser;
