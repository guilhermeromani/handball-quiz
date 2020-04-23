const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.PWD_SECRET);

    req.userId = decoded.id;
    return next();
  } catch (err) {
    res.status(401).json({ error: "Token invalid" });
  }

  return next();
};
