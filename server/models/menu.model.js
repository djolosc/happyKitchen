module.exports = (sequelize, DataTypes) => sequelize.define('Menu', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dish_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
        model: Dish,
        key: 'id'
  }
}
});
