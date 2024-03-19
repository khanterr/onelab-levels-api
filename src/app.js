const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const companyRoutes = require("./routes/companyRoutes");
const locationRoutes = require("./routes/locationRoutes");
const salaryRoutes = require("./routes/salaryRoutes");
const specializationRoutes = require("./routes/specializationRoutes");

mongoose.connect(process.env.CONNECTION_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use('/api/auth', authRoutes)
app.use('/api', userRoutes);
app.use('/api', companyRoutes);
app.use('/api', locationRoutes);
app.use('/api', salaryRoutes);
app.use('/api', specializationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app
