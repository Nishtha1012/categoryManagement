const jwt = require("jsonwebtoken");
const { buildErrObject } = require("../utils/buildErrorObject");
const { handleError } = require("../utils/handleError");
const getUserById = require("../utils/getUserById");

const verifyAuthToken = async (req, res, next) => {
  try {
    const token = req.cookies?.authToken;

    if (!token) throw buildErrObject(401, "UNAUTHORIZED");

    const { data } = jwt.verify(token, process.env.JWT_SECRET);

    const user = await getUserById(data._id);

    if (!user) throw buildErrObject(401, "UNAUTHORIZED");

    req.user = user;
    next();
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = verifyAuthToken;
