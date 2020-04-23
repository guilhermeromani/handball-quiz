const SessionBusiness = require("../business/SessionBusiness");

module.exports = {
  async create(req, res) {
    var business = new SessionBusiness();

    const result = await business.create(req.body);
    if (result) {
      return res.json(result);
    } else {
      return res.status(401).json({ error: "Login/Password incorrect" });
    }
  },
};
