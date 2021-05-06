const { usersignup, hotelMgr,AdminModel } = require("../Database/userSchema");
const signup = async (req, res) => {
  const data = req.body;
  // console.log(data);
  try {
    if (data.password === data.cpassword) {
      const dataCheck = new usersignup(data);
      await dataCheck.save();
      res.json(dataCheck.email);
    } else {
      res.json({ passerr: "passerr" });
    }
  } catch (error) {
    console.log(`error during signup ${error}`);
    console.log(error);
    res.json(error);
  }
};

//sign in data
const singin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isExists = await usersignup.findOne({ email, password });
    // console.log(isExists);
    //respose
    if (isExists === null) {
      res.json({ err: "err" });
    }
    if (isExists !== null) {
      res.json({ success: "success", user: isExists.email });
    }
  } catch (error) {
    console.log(`error during sigin the data ${error}`);
    console.log(error);
    // res.json({err:error});
  }
};
// get all data
const getData = async (req, res) => {
  try {
    const data = await usersignup.find();
    res.json({ data });
  } catch (error) {
    console.log(`error during the getall data`);
  }
};
//delete user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userDelete = await usersignup.findByIdAndDelete({ _id: id });
    // console.log(userDelete);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};
//update a user
const udpateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const newData = await usersignup.findByIdAndUpdate({ _id: id }, data);
    res.json({ data: newData });
  } catch (error) {
    console.log(`error during the updateUser ${error}`);
  }
};
//find a single user
const findSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await usersignup.findById({ _id: id });
    res.json({ data });
  } catch (error) {
    console.log(`error during find a one user ${error}`);
  }
};
//add new hotel manager
const addHotelManager = async (req, res) => {
  const data = req.body;
  try {
    const mgrData = new hotelMgr(data);
    const resp = await mgrData.save();
    res.json({ resp });
    console.log(data);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
//get all the hotel managers
const getAllHotelManagers = async (req, res) => {
  try {
    const data = await hotelMgr.find();
    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};
//delete hotelmangers
const deleteManagers = async (req, res) => {
  const { id } = req.params;
  try {
    const userDelete = await hotelMgr.findByIdAndDelete({ _id: id });
    // console.log(userDelete);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};
// update managers
const findSingleManager = async (req, res) => {
  const { id } = req.params;

  try {
    const newData = await hotelMgr.findById({ _id: id });
    res.json({ data: newData });
  } catch (error) {
    console.log(`error during the updateUser ${error}`);
  }
};
//// update managers
const udpateManagers = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const newData = await hotelMgr.findByIdAndUpdate({ _id: id }, data);
    res.json({ data: newData });
  } catch (error) {
    console.log(`error during the updateUser ${error}`);
  }
};
// admin sign up
const signupAdmin = async (req, res) => {
  const data = req.body;
  // console.log(data);
  try {
    if (data.password === data.cpassword) {
      const dataCheck = new AdminModel(data);
      await dataCheck.save();
      res.json(dataCheck.email);
    } else {
      res.json({ passerr: "passerr" });
    }
  } catch (error) {
    console.log(`error during admin signup ${error}`);
    console.log(error);
    res.json(error);
  }
};
//admin sign in
//sign in data
const signinadmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isExists = await AdminModel.findOne({ email, password });
    // console.log(isExists);
    //respose
    if (isExists === null) {
      res.json({ err: "err" });
    }
    if (isExists !== null) {
      res.json({ success: "success", user: isExists.email });
    }
  } catch (error) {
    console.log(`error during sigin the data ${error}`);
    console.log(error);
    // res.json({err:error});
  }
};
module.exports = {
  signup,
  singin,
  getData,
  deleteUser,
  udpateUser,
  findSingleUser,
  addHotelManager,
  getAllHotelManagers,
  deleteManagers,
  findSingleManager,
  udpateManagers,
  signupAdmin,signinadmin
};
