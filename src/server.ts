import express from "express";
import { globalErrorHandlers, notFoundHandlers } from "./helpers/handler";
import routes from "./routes";
const app = express();
app.use("/api", routes);
app.use(notFoundHandlers);
app.use(globalErrorHandlers);
app.listen(8080, () => {
  console.log("listening");
});
