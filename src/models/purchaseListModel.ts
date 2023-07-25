export interface Item {
    name: string;
    value: number;
  }
  
  export interface PurchaseList {
    id: number;
    title: string;
    items: Item[];
  }