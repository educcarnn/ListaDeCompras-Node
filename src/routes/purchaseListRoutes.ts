const express = require('express')

import {
    createPurchaseList,
    getAllPurchaseLists,
    getPurchaseListById,
    deleteListItem,
    deletePurchaseList,
} from '../controllers/purchaseListController';

const router = express.Router();

router.post('/purchaseList', createPurchaseList);
router.get('/purchaseList', getAllPurchaseLists);
router.get('/purchaseList/:purchaseListId', getPurchaseListById);

router.delete('/purchaseList/:purchaseListId/:itemName', deleteListItem)
router.delete('/purchaseList/:purchaseListId', deletePurchaseList)

export default router;