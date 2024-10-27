const Sequelize = require("sequelize");
const pkg = require("../../package.json");

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const db = new Sequelize({
  database: "dagerhss54t4lg", // Update the database name
  username: "u598jad54f13m4", // Update the username
  password: "p09b0cfb76cd7589c2a8cdd75e16c53e526da0ccbc6f0a323c670b20b2a05ac68", // Update with the provided password
  host: "cd5gks8n4kb20g.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com", // Update the hostname
  port: 5432, // Update the port number
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
module.exports = db;
