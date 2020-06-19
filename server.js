const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3791;

// Middleware to handle Cors
app.use(cors());

app.listen(PORT, () =>
  console.log(`One server to rule them all running on port ${PORT}`)
);
