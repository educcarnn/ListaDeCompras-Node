import { Request, Response } from 'express';
import { PurchaseList } from '../models/purchaseListModel';

const purchaseLists: PurchaseList[] = [];
let currentId = 1;

export const createPurchaseList = (req: Request, res: Response) => {
  const { title, items } = req.body;

  if (!title || !Array.isArray(items)) {
    return res.status(400).json({ message: 'Entrada inválida' });
  }

  const newList: PurchaseList = {
    id: currentId++,
    title,
    items,
  };

  purchaseLists.push(newList);
  return res.status(201).json(newList);
};

export const getAllPurchaseLists = (req: Request, res: Response) => {
    return res.status(200).json(purchaseLists);
  };

  export const getPurchaseListById = (req: Request, res: Response) => {
    const id = parseInt(req.params.purchaseListId, 10);
    const list = purchaseLists.find((item) => item.id === id);
  
    if (!list) {
      return res.status(404).json({ message: 'Lista não encontrada' });
    }
  
    return res.status(200).json(list);
  };