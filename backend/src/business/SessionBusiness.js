const jwt = require("jsonwebtoken");

const UserBusiness = require("../business/UserBusiness");

class SessionBusiness {
  async create(data) {
    var { email, password } = data;

    var userBusiness = new UserBusiness();
    var user = await userBusiness.findByEmail(email);

    if (!user) {
      return null; // User not found.
    }

    if (!(await user.compareHash(password))) {
      return null; // Password does not match.
    }

    return {
      token: jwt.sign({ id: user.id }, process.env.PWD_SECRET, {
        expiresIn: "7d",
      }),
      user: user,
    };
  }
}

module.exports = SessionBusiness;
