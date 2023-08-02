const express = require('express')

import {
    createPurchaseList,
    getAllPurchaseLists,
    getPurchaseListById,
    deleteListItem,
} from '../controllers/purchaseListController';

const router = express.Router();

router.post('/purchaseList', createPurchaseList);
router.get('/purchaseList', getAllPurchaseLists);
router.get('/purchaseList/:purchaseListId', getPurchaseListById);

router.delete('/purchaseList/:purchaseListId/:itemName', deleteListItem)


export default router;