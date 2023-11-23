const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = 5000;

const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bok");
});

app.listen(port, () => {
  console.log(`Product service on port: ${port}`);
});
