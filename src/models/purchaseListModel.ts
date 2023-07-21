export interface Item {
    name: string;
    value: string;
  }
  
  export interface PurchaseList {
    id: number;
    title: string;
    items: Item[];
  }