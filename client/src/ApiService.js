const BASE_URL = 'http://localhost:3001';

//DISHES
const getDishes = () => {
  return fetchRequest('/dish');
}

const addDish = (body) => {
  const httpOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return fetchRequest('/dish', httpOptions);
}

//MENUS
const getMenus = () => {
  return fetchRequest('/menu');
}

const createMenu = (body) => {
  const httpOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return fetchRequest('/menu', httpOptions);
}

//ORDERS
const getOrders = () => {
  return fetchRequest('/order');
}

function fetchRequest (path, options) {
  return fetch(BASE_URL + path, options)
    .then((res) => res.status >= 400 ? Promise.reject() : res)
    .then((res) => res.json())
    .catch((error) => console.log(`Error fetching ${path}`, error))
}

export default {
  getDishes,
  getMenus,
  getOrders,
  addDish,
  createMenu
};
