const mongoose = require('mongoose');
const connections = {};

async function connectTenantDb(tenantId) {
  if (connections[tenantId]) return connections[tenantId];

  const uri = `mongodb+srv://zb68895:rVMm9dSgHe9AEutZ@cluster0.wenbtay.mongodb.net/${tenantId}` // Use own Mongo URL for storing data.
  const conn = await mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connections[tenantId] = conn;
  return conn;
}

module.exports =  connectTenantDb ;
