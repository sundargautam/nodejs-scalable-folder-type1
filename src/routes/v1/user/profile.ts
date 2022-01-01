import { Router } from "express";

const userProfileRouter = Router();

userProfileRouter.get("/profile", (req, res) => {
  res.json({
    message: "user profile",
  });
});
export default userProfileRouter;
