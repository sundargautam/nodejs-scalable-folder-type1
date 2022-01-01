import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", (req, res) => {
  res.json({
    message: "loggedin",
  });
});

authRouter.post("/register", (req, res) => {
  res.json({
    message: "loggedout",
  });
});

export default authRouter;
