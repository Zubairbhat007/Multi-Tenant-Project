const express = require('express');
const subdomainRouter = require('./middleware/subdomainRouter');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(subdomainRouter);

app.use('/auth', authRoutes);
app.use(express.static('public')); //  HTML files 

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
  console.log(` Running app on :-`);
  console.log(`       http://client1.localhost:${PORT}/auth.html`);
  console.log(`       http://client2.localhost:${PORT}/auth.html`);
});

