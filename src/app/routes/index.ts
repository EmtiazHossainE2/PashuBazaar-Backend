import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { BuyerRoutes } from "../modules/buyer/buyer.route";

const router = express.Router();

router.use("/users", UserRoutes);
router.use("/buyers", BuyerRoutes);

export default router;
