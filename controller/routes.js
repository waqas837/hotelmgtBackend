const express = require("express");
const router = express.Router();
const {
  singin,
  signup,
  getData,
  deleteUser,
  udpateUser,
  findSingleUser,
  addHotelManager,
  getAllHotelManagers,
  deleteManagers,
  findSingleManager,
  udpateManagers,signupAdmin,signinadmin
} = require("./userLogics");
router.post("/signup", signup);
router.post("/signin", singin);
router.get("/getData", getData);
router.delete("/deleteUser/:id", deleteUser);
router.put("/udpateUser/:id", udpateUser);
router.get("/findSingleUser/:id", findSingleUser);
router.post("/addHotelManager", addHotelManager);
router.get("/getAllHotelManagers", getAllHotelManagers);
router.delete("/deleteManagers/:id", deleteManagers);
router.get("/findSingleManager/:id", findSingleManager);
router.put("/udpateManagers/:id", udpateManagers);
router.post("/signupAdmin",signupAdmin)
router.post("/signinadmin",signinadmin)
module.exports = router;
