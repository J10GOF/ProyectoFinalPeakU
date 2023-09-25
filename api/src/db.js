require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    host: "localhost",
    dialect: "postgres",
    logging: false, // Desactiva el logging de las consultas SQL si no lo necesitas
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  });

// Definición de modelos
modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);



// Aca vendrían las relaciones entre modelos
const { Place, Country } = sequelize.models;

// Define las relaciones aquí
Place.belongsTo(Country, { foreignKey: "countryId" });
Country.hasMany(Place, { foreignKey: "countryId" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
  Place,
  Country,
};
