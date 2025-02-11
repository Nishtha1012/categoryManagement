const logoutUser = async (req, res) => {
  res
    .cookie("authToken", "", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      expires: new Date(0),
    })
    .json({ message: "user logged out" });
};

module.exports = logoutUser;
