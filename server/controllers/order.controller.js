// const db = require('../models/index');
const {Order} = require('../models');


//get all orders 
exports.getAll = async (req, res) => {
  try {
    const orders = await Order.findAll();

    res.status(200)
    res.send(orders)
  } catch (e) {
    console.log(e)  //eslint-disable-line no-console
    res.status(500);
  }

};

// create an order
exports.createOrder= async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    // newOrder.addDish(id) to update the joined table
    res.status(201);
    res.send(newOrder)
  } catch (e) {
    console.log(e);  //eslint-disable-line no-console
    res.status(500).send(e);
  }
}

// delete a order
exports.deleteOrder= async (req, res) => {
  const id = parseInt(req.body.id);

  Order.destroy({
    where: { id: id}
  }).then(() => {
    res.status(204).end();
  })
  .catch(err => {
    res.status(500).send({
      message: "Error deletingOrder with id=" + id
    });
  });
}


// exports.modifyOrder = (req, res) => {
//   const id = parseInt(req.body.id);

//   Order.save({
//     where: { 
//       id: id,
//       phone: phone
//       }
//   })
//   .then(() => {
//     res.status(204).end();
//   })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Order with id=" + id
//       });
//     });
// };


//TODO: modify an order (if needed later)


