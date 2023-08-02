const express = require("express");

import {
  createPurchaseList,
  getAllPurchaseLists,
  getPurchaseListById,
  deleteListItem,
  deletePurchaseList,
  updateListItem,
} from "../controllers/purchaseListController";

import { validateInputMiddleware } from "../middlewares/validateInputMiddleware";

import { validateValueTypeMiddleware } from "../middlewares/validateValueTypeMiddleware";

const router = express.Router();

router.post("/purchaseList", validateInputMiddleware, createPurchaseList);
router.get("/purchaseList", getAllPurchaseLists);
router.get("/purchaseList/:purchaseListId", getPurchaseListById);

router.delete("/purchaseList/:purchaseListId/:itemName", deleteListItem);
router.delete("/purchaseList/:purchaseListId", deletePurchaseList);

router.patch(
  "/purchaseList/:purchaseListId/:itemName",
  validateValueTypeMiddleware,
  updateListItem
);

export default router;
