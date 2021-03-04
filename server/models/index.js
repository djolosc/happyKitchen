const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('easyKitchen', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log // Default, displays the first parameter of the log function call
});

 sequelize
.authenticate()
.then(()=> {
  console.log('Connection has been established succesfully.')
})
.catch((error)=> {
  console.error('Unable to connect to the database:', error)
});
