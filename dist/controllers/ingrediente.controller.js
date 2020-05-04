"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIngrediente = getIngrediente;
exports.createIngrediente = createIngrediente;
exports.getOneIngrediente = getOneIngrediente;
exports.deleteIngrediente = deleteIngrediente;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Ingrediente = require('../models')["default"].Ingrediente; //import Ingrediente from '../models/Ingrediente'


function getIngrediente(_x, _x2) {
  return _getIngrediente.apply(this, arguments);
}

function _getIngrediente() {
  _getIngrediente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var ingredientes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Ingrediente.findAll({
              attributes: ['id', 'nombre', 'descripcion']
            });

          case 3:
            ingredientes = _context.sent;
            res.json({
              data: ingredientes
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getIngrediente.apply(this, arguments);
}

;

function createIngrediente(_x3, _x4) {
  return _createIngrediente.apply(this, arguments);
}

function _createIngrediente() {
  _createIngrediente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, id, nombre, descripcion, newIngrediente;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, id = _req$body.id, nombre = _req$body.nombre, descripcion = _req$body.descripcion;
            _context2.prev = 1;
            _context2.next = 4;
            return Ingrediente.create({
              id: id,
              nombre: nombre,
              descripcion: descripcion
            }, {
              fields: ['id', 'nombre', 'descripcion']
            });

          case 4:
            newIngrediente = _context2.sent;

            if (!newIngrediente) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Ingrediente created successfully',
              data: newIngrediente
            }));

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 13:
            console.log(req.body);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _createIngrediente.apply(this, arguments);
}

;

function getOneIngrediente(_x5, _x6) {
  return _getOneIngrediente.apply(this, arguments);
}

function _getOneIngrediente() {
  _getOneIngrediente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, ingrediente;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return Ingrediente.findOne({
              where: {
                id: id
              },
              attributes: ['id', 'nombre', 'descripcion']
            });

          case 3:
            ingrediente = _context3.sent;
            res.json({
              data: ingrediente
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneIngrediente.apply(this, arguments);
}

function deleteIngrediente(_x7, _x8) {
  return _deleteIngrediente.apply(this, arguments);
}

function _deleteIngrediente() {
  _deleteIngrediente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return Ingrediente.destroy({
              where: {
                id: id
              }
            });

          case 3:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Ingrediente Deleted',
              count: deleteRowCount
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteIngrediente.apply(this, arguments);
}