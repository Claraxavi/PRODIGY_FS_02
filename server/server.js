require('dotenv').config();
require('./db');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));  // ← THIS LINE MUST EXIST
app.use("/api/employees", require("./routes/employees"));

app.get('/', (req, res) => {
  res.send("Server is running");
});
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT || 5000}`);
});


