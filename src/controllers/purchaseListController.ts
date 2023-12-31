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

export const updateListItem = (req, res) => {
  const id = parseInt(req.params.purchaseListId, 10);
  const itemName = req.params.itemName;
  const newItemValue = req.body.value;
  const newItemName = req.body.name;

  const list = purchaseLists.find((item) => item.id === id);

  if (!list) {
    return res.status(404).json({ message: 'Lista não encontrada' });
  }

  const itemToUpdate = list.items.find((item) => item.name === itemName);

  if (!itemToUpdate) {
    return res.status(404).json({ message: 'Item não encontrado na lista' });
  }

  if (!newItemValue || !newItemName) { 
    return res.status(400).json({ message: 'Valor ou novo nome não informado' });
  }

  itemToUpdate.value = newItemValue;
  itemToUpdate.name = newItemName;

  return res.status(200).json(list);
};

export const deleteListItem = (req: Request, res: Response) => {
    const id = parseInt(req.params.purchaseListId, 10);
    const itemName = req.params.itemName;
  
    const list = purchaseLists.find((item) => item.id === id);
  
    if (!list) {
      return res.status(404).json({ message: 'Lista não encontrada' });
    }
  
    const index = list.items.findIndex((item) => item.name === itemName);
  
    if (index === -1) {
      return res.status(404).json({ message: 'Item não encontrado na lista' });
    }
  
    list.items.splice(index, 1);
    return res.status(204).send();
};

export const deletePurchaseList = (req: Request, res: Response) =>{
  const id = parseInt(req.params.purchaseListId, 10)
  const index = purchaseLists.findIndex((item) => item.id === id)

  if(index === -1){ 
    return res.status(404).json({message: 'Lista não encontrada'})
  }

  purchaseLists.splice(index, 1)
  return res.status(204).send()
}
