import { RequestHandler } from "express";
import { errorLogger } from "../../../shared/logger";
import { UserService } from "./user.service";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await UserService.createUser(user);
    res.status(200).json({
      success: true,
      message: "User created successfully !",
      data: result,
    });
  } catch (error) {
    errorLogger.error(error);
    next(error);
  }
};

export const UserController = {
  createUser,
};
