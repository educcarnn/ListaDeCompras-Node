const express = require('express')

import {
    createPurchaseList,
    getAllPurchaseLists,
    getPurchaseListById,
} from '../controllers/purchaseListController';

const router = express.Router();

router.post('/purchaseList', createPurchaseList);
router.get('/purchaseList', getAllPurchaseLists);
router.get('/purchaseList/:purchaseListId', getPurchaseListById);

export default router;