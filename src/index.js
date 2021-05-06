const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const router = require('../controller/routes');
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:"true"}));
const port = process.env.PORT || 1000;
app.use("/user",router)
app.get("/",(req,res)=>{
  res.send("welcome to the hotel manangement web app")
})

app.listen(port, () => { 
  console.log(`server is listening at port ${port}`);
});
