type bodyDish = {
  title: string;
  description: string;
  price: number;
  id: string;
  image: null;
}

type bodyMenu = {
  id: string;
  title: string;
  description: string;
  image: null;
  createdAt: string;
  updatedAt: string;
  price: number;
  Dishes: dish[];
}

type bodyOrder = {
  id: string;
  clientName: string;
  clientAddress: string;
  clientPhone: string;
  comments: string;
}

type dish = {
  id: string;
  title: string;
  description: string;
  image: null; 
  createdAt: string;
  updatedAt: string;
  price: number;

}

type menu = {
  id: string;
  title: string;
  description: string;
  image: null;
  createdAt: string;
  updatedAt: string;
  price: number;
  Dishes: dish[];
}

type parsedMenu = {
  id: string;
  title: string;
  description: string;
  image: null;
  createdAt: string;
  updatedAt: string;
  price: number;
  Dishes: dish[];
}
type order = {
  id: string;
  clientName: string;
  clientAddress: string;
  clientPhone: string;
  comments: string;
  Dishes: dish[];
  
}

type data = {
  id: string;
  title: string;
  description: string;
  clientName: string;
  clientAddress: string;
  clientPhone: string;
  comments: string;
  DishId: string[];
  price: number,
  image: null,
}

type parsedData = {
  id: string;
  title: string;
  description: string;
  clientName: string;
  clientAddress: string;
  clientPhone: string;
  comments: string;
  DishId: number[];
  price: number,
}

export type {
  bodyDish, bodyMenu, bodyOrder, dish,menu, parsedMenu, order, data, parsedData
}