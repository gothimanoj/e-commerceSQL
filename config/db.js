const { Sequelize, DataTypes } = require("sequelize");
const env = require("../environment");

const dbName = env("database").db;
const dialect = env("database").dialect;
const username = env("database").username;
const password = env("database").password;
const server = env("database").server;
const host = env("database").host;
const pool = env("database").pool;
const port = env("database").port;

const sequelize = new Sequelize(dbName, username, password, {
  host,
  dialect,
  port,
//   operatorsAliases: false,
  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle,
  },
});
sequelize.sync({force:false,alter:{drop:false}}).then(() => {
    console.log("re-sync db.");
  });
sequelize.authenticate()
  .then((result) => {
    console.log("Connected To Database");
  })
  .catch((err) => {
    console.log(err);
  });


module.exports = sequelize;
