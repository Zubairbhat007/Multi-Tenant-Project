module.exports = (req, res, next) => {
  const host = req.headers.host; // client1.localhost:3000 || client2.localhost:3000
  const tenantId = host.split('.')[0]; // "client1" or "client2"
  req.tenantId = tenantId;
  next();
};
