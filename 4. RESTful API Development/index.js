const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use("/api/user", require("./routes/user"));
app.use("/api/playlist", require("./routes/playlist"));
app.listen(process.env.PORT||PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
