import express from "express";
import {
  createBuyer,
  deleteAllBuyers,
  deleteBuyerByEmail,
  getAllBuyers,
  getBuyerByEmail,
  updateBuyerByEmail,
} from "./buyer.controller";

const router = express.Router();

// Get all buyers
router.get("/", getAllBuyers);

// Create a new buyer
router.post("/create-buyer", createBuyer);

// Get a buyer by email
router.get("/get-buyer/:email", getBuyerByEmail);

// Update a buyer by email
router.put("/update-buyer/:email", updateBuyerByEmail);

// Delete a buyer by email
router.delete("/delete-buyer/:email", deleteBuyerByEmail);

// Delete all buyers
router.delete("/delete-all-buyers", deleteAllBuyers);

export const BuyerRoutes = router;
