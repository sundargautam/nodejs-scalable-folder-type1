import { Router } from "express";
import userProfileRouter from "./profile";
const userRouter = Router();
userRouter.use(userProfileRouter);
export default userRouter;
