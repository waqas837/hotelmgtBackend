const mongoose = require("mongoose");
const validator = require("validator");
// this thing/connection url must not be repeated
mongoose
  .connect("mongodb://localhost/userSignsUp",
  // "mongodb+srv://waqasKhan:bughlani1122@cluster0.agwp7.mongodb.net/useSingnup?retryWrites=true&w=majority"
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(`DB connection failed ${err}`));
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
const userData = new mongoose.Schema({
  email: {
    unique: true,
    type: String,
    validate(val) {
      if (!validator.isEmail(val)) throw new Error("emailWrongPattern");
    },
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});
// 2nd schema
const hotelManger = new mongoose.Schema({
  hotelName: {
    unique: true,
    type: String,
    required: true,
  },
  hotelLocation: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(val) {
      if (!validator.isEmail(val)) throw new Error("emailWrongPattern");
    },
  },
  password: {
    type: String,
    required: true,
  },
});
// 3rd schema
const adminShema = new mongoose.Schema({
  email: {
    unique: true,
    type: String,
    validate(val) {
      if (!validator.isEmail(val)) throw new Error("emailWrongPattern");
    },
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});
const usersignup = new mongoose.model("usersignup", userData);
const hotelMgr = new mongoose.model("Manger", hotelManger);
const AdminModel = new mongoose.model("Admin", adminShema);
module.exports = { usersignup, hotelMgr,AdminModel };
