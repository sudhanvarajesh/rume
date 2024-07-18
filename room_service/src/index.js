require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const roomRoutes = require('./routes/roomRoutes');

const app = express();

app.use(express.json());
app.use('/api', roomRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
