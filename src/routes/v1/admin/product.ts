import { Router } from "express";

const adminProductRouter = Router();

adminProductRouter.get("/view/product/all", (req, res) => {
  res.json({
    name: "belt",
  });
});

export default adminProductRouter;
