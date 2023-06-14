import { RequestHandler } from "express";
import ApiError from "../../../error/ApiError";
import { errorLogger } from "../../../shared/logger";
import { Buyer } from "./buyer.model";

/**
 * Create a new buyer.
 * POST /api/buyers/create-buyer
 */
export const createBuyer: RequestHandler = async (req, res, next) => {
  try {
    const buyer = req.body;

    const existingBuyer = await Buyer.findOne({ email: buyer.email });
    if (existingBuyer) {
      throw new ApiError(400, "Buyer with this email already exists!");
    }

    const result = await Buyer.create(buyer);

    res.status(201).json({
      success: true,
      message: "Buyer created successfully!",
      data: result,
    });
  } catch (error) {
    errorLogger.error(error);
    next(error);
  }
};

/**
 * Get all buyers.
 * GET /api/buyers
 */
export const getAllBuyers: RequestHandler = async (req, res, next) => {
  try {
    const buyers = await Buyer.find();

    res.status(200).json({
      success: true,
      message: "All buyers",
      data: buyers,
    });
  } catch (error) {
    errorLogger.error(error);
    next(error);
  }
};

/**
 * Get a buyer by email.
 * GET /api/buyers/:email
 */
export const getBuyerByEmail: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.params;

    const buyer = await Buyer.findOne({ email });

    if (!buyer) {
      throw new ApiError(404, "Buyer not found!");
    }

    res.status(200).json({
      success: true,
      message: "Buyer retrieved successfully!",
      data: buyer,
    });
  } catch (error) {
    errorLogger.error(error);
    next(error);
  }
};

/**
 * Update a buyer by email.
 * PUT /api/buyers/:email
 */
export const updateBuyerByEmail: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.params;
    const updatedBuyer = req.body;

    // Check if the email field is present in the updatedBuyer object
    if (updatedBuyer.email) {
      throw new ApiError(400, "Email is read-only");
    }

    const result = await Buyer.findOneAndUpdate(
      { email: email },
      updatedBuyer,
      {
        new: true,
      }
    );

    if (!result) {
      throw new ApiError(404, "Buyer not found!");
    }

    res.status(200).json({
      success: true,
      message: "Buyer updated successfully!",
      data: result,
    });
  } catch (error) {
    errorLogger.error(error);
    next(error);
  }
};

/**
 * Delete a buyer by email.
 * DELETE /api/buyers/:email
 */
export const deleteBuyerByEmail: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.params;

    const result = await Buyer.deleteOne({ email });

    if (result.deletedCount === 0) {
      throw new ApiError(404, "Buyer not found!");
    }

    res.status(200).json({
      success: true,
      message: "Buyer deleted successfully!",
      data: result,
    });
  } catch (error) {
    errorLogger.error(error);
    next(error);
  }
};

/**
 * Delete all buyers.
 * DELETE /api/buyers
 */
export const deleteAllBuyers: RequestHandler = async (req, res, next) => {
  try {
    const result = await Buyer.deleteMany();

    if (!result.deletedCount) {
      throw new ApiError(404, "No buyers found to delete!");
    }

    res.status(200).json({
      success: true,
      message: "All buyers deleted successfully!",
      data: result,
    });
  } catch (error) {
    errorLogger.error(error);
    next(error);
  }
};
