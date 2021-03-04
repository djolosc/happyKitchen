// const db = require('../models/index');
const { Order, Dish } = require('../models');


//get all orders 
exports.getAll = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [{ model: Dish }]
    });
    res.status(200)
    res.send(orders)
  } catch (e) {
    console.log(e)  //eslint-disable-line no-console
    res.status(500);
  }
};

// create an order
exports.createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    newOrder.addDish(req.body.DishId); //update join table data
    res.status(201);
    res.send(newOrder)
  } catch (e) {
    console.log(e);  //eslint-disable-line no-console
    res.status(500).send(e);
  }
}

// delete a order
exports.deleteOrder = async (req, res) => {
  const id = parseInt(req.body.id);

  Order.destroy({
    where: { id: id }
  }).then(() => {
    res.status(204).end();
  })
    .catch(err => {
      res.status(500).send({
        message: "Error deletingOrder with id=" + id
      });
    });
}

//TODO: modify an order (if needed later)
// exports.modifyOrder = async (req, res) => {
//   const old = await Order.findOne({ where: { title: title } })
//   if (old === null) console.log('Not found, sorry!')
// };





