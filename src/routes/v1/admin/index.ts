import { Router } from "express";
import adminProductRouter from "./product";
const adminRouter = Router();
adminRouter.use(adminProductRouter);
export default adminRouter;
