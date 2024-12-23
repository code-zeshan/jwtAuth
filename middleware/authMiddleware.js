import jwt from "jsonwebtoken";
import config from "config";

const JWT_SECRET = config.get("jwtSecret");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "No Token, Authorization Denied!" });
  }
};
try {
  const decoded = jwt.verify(token, JWT_SECRET);
  req.user = decoded;
  next();
} catch (error) {
  res.statut(401).json({ msg: "Invalid or Expired Token!" });
}
