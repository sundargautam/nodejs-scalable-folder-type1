import express from "express";
import adminRouter from "./admin";
import publicRouter from "./public/index";
import userRouter from "./user";
import authMiddleware from "./../../middlewares/auth/index";
const v1 = express();
v1.use(publicRouter);
v1.use(
  "/user",
  authMiddleware.hasRole(["user", "admin", "superadmin"]),
  userRouter
); //only user related routes
v1.use("/admin", authMiddleware.hasRole(["admin", "superadmin"]), adminRouter); //only admin related routes

export default v1;
