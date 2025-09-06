import express from "express";
import {
  getAllUsers,
  login,
  logout,
  register,
  updateProfile,
  profile,
  // bookMark,
} from "../controllers/user.controller.js";
// import auth from "../middleware/auth.middleware.js";
// import sendContact from "../utils/sendContact.js";
// import sendSubscribe from "../utils/sendSubscribe.js";
// import sendConfirmation from "../utils/sendConfirmation.js";
import auth from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.route("/register").post(register);
userRouter.route("/login").post(auth(false), login);
userRouter.route("/logout").get(auth(), logout);
// userRouter.route("/contact").post(sendContact);
userRouter.route("/profile/:id").get(profile);
// userRouter.route("/subscribe").post(sendSubscribe);
// userRouter.route("/subscribe").post(sendConfirmation);
// userRouter.route("/confirmation").post(sendConfirmation);
userRouter.route("/profile/update").patch(auth(), updateProfile);
userRouter.route("/all-users").get(getAllUsers);

export default userRouter;
