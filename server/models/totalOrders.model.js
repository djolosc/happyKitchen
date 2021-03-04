module.exports = (sequelize, DataTypes) => sequelize.define('Total_orders', {
  dish_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Dish,
      key: 'id'
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  order_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: 'id'
    }
  }
});
