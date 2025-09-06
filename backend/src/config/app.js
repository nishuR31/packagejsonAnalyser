import express from "express";
import cors from "cors";
import cookie from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import expressLimit from "express-rate-limit";
import logger from "../utils/logger.js";
import ApiErrorResponse from "../utils/apiErrorResponse.js";
import ApiResponse from "../utils/apiResponse.js";
import codes from "../utils/statusCodes.js";
import jokeRouter from "../routers/joke.router.js";
import userRouter from "../routers/user.router.js";

const baseRoute = "/api/v1";

let limit = expressLimit({
  windowMs: 60 * 1000,
  max: 60,
  message: "Limit reached, kindly wait until limit gets refreshed..",
});

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(limit);
app.use(cors({ origin: "*" }));
app.use(logger);
app.use(cookie());
// app.use(helmet());
app.use(morgan("dev"));
app.use(express.static("public"));

app.use(`${baseRoute}/j`, jokeRouter);
app.use(`${baseRoute}/u`, userRouter);

app.use("/", (req, res) => {
  res.status(codes.ok).json(new ApiResponse("Server fired up", codes.ok).res());
});
app.all("/*splat", (req, res) => {
  res.status(codes.notFound).json(
    new ApiResponse("Route not found", codes.notFound, {
      route: req.path,
    }).res()
  );
});

app.use((err, req, res, next) => {
  return res
    .status(codes.badRequest)
    .json(
      new ApiErrorResponse(
        "Error occured, control recieved to error route",
        codes.badRequest,
        {},
        err
      ).res()
    );
});

export default app;
