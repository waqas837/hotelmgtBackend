const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const router = require('../controller/routes');
const app = express();
app.use(cors());
const port = process.env.Port || 1000;
app.use("/user",router)
app.listen(port, () => { 
  console.log(`server is listening at port ${port}`);
});
