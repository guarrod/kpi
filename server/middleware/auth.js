module.exports = function auth(req, res, next) {
  const token = process.env.API_TOKEN;
  if (!token) return next();
  const header = req.headers['authorization'] || '';
  if (header !== `Bearer ${token}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};
