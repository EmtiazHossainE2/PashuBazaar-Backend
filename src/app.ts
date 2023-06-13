import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import httpStatus from "http-status";


const app: Application = express();

import routes from './app/routes/index';

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes
// app.use("/api/v1/users/", UserRoutes);
app.use("/api/v1/", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to backend !");
});

//Testing
// app.get("/test",  (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, "Custom Error ");
// });

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Api Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;