const user_controller = require('../controllers/user_controller');
var express=require("express");

const router = express.Router();

// http://localhost:3007/api/v1/users/signup
router.post("/signup", user_controller.createUser);
router.post("/login", user_controller.login);
router.get("/:id", user_controller.getUser);

module.exports = router;