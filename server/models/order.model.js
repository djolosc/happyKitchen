module.exports = (sequelize, DataTypes) => sequelize.define('Order', {
  client_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  client_address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  client_phone: {
    type: Sequelize.INTEGER
  },
  comments: {
    type: Sequelize.STRING
  },
  orderTot_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Total_orders,
      key: 'id'
    }
  },
  total_price: {
    type: Sequelize.DECIMAL(10, 2),
  }
});