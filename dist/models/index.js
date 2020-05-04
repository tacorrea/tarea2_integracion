'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = require("fs");

var _path = require("path");

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var basename = (0, _path.basename)(__filename);
var env = process.env.NODE_ENV || 'development';
var config;

if (env === "development") {
  config = require(__dirname + '/../config/config.json')[env];
}

var db = {};
var sequelize;

if (env === "production") {
  sequelize = new _sequelize["default"](process.env["DATABASE_URL"], {
    dialect: 'postgres',
    protocol: 'postgres'
  });
} else {
  sequelize = new _sequelize["default"](config.database, config.username, config.password, config);
}

(0, _fs.readdirSync)(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = sequelize['import']((0, _path.join)(__dirname, file));
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = _sequelize["default"];
var _default = db;
exports["default"] = _default;