// const db = require('../models/index'); => db.Menu
const { Menu, Dish } = require('../models');

//get all menus 
exports.getAll = async (req, res) => {
  try {
    const menus = await Menu.findAll({
      include: [{ model: Dish }]
    });
    res.status(200)
    res.send(menus)
  } catch (e) {
    console.log(e)  //eslint-disable-line no-console
    res.status(500);
  }
};

// create a menu 
exports.createMenu = async (req, res) => {
  try {
    const newMenu = await Menu.create({ title: req.body.title });
    newMenu.addDish(req.body.DishId);
    res.status(201);
    res.send(newMenu)
  } catch (e) {
    console.log(e);  //eslint-disable-line no-console
    res.status(500).send(e);
  }
}

// delete a menu 
exports.deleteMenu = async (req, res) => {
  // const id = parseInt(req.body.id); =>where: { id: id }
  // if (Number.isNaN(id) || !id) return res.status(400).end();
  const title = req.body.title;
  // if(!title) return res.status(400).send('Menu not found')
  Menu.destroy({
    where: { title: title }
  }).then(() => {
    res.status(204).end();
  })
    .catch(err => {
      res.status(500).send({
        message: "Error deletingOrder with id=" + id
      });
    });
}


//TODO: modify a menu (if needed later)