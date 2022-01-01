import express from "express";
import authRouter from "./auth";
const publicRouter = express();
publicRouter.use("/auth", authRouter);
publicRouter.get("/public", (req, res) => {
  res.json({
    ok: true,
    message: "public",
  });
});

export default publicRouter;
