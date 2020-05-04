"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHamburguesa = getHamburguesa;
exports.createHamburguesa = createHamburguesa;
exports.getOneHamburguesa = getOneHamburguesa;
exports.deleteHamburguesa = deleteHamburguesa;
exports.updateHamburguesa = updateHamburguesa;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Hamburguesa = require('../models')["default"].Hamburguesa;

function getHamburguesa(_x, _x2) {
  return _getHamburguesa.apply(this, arguments);
}

function _getHamburguesa() {
  _getHamburguesa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var hamburguesa;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Hamburguesa.findAll({
              include: ["ingredientes"]
            });

          case 3:
            hamburguesa = _context.sent;
            res.json({
              data: hamburguesa
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
  return _getHamburguesa.apply(this, arguments);
}

;

function createHamburguesa(_x3, _x4) {
  return _createHamburguesa.apply(this, arguments);
}

function _createHamburguesa() {
  _createHamburguesa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, id, nombre, precio, descripcion, imagen, newHamburguesa;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, id = _req$body.id, nombre = _req$body.nombre, precio = _req$body.precio, descripcion = _req$body.descripcion, imagen = _req$body.imagen;
            _context2.prev = 1;
            _context2.next = 4;
            return Hamburguesa.create({
              id: id,
              nombre: nombre,
              precio: precio,
              descripcion: descripcion,
              imagen: imagen
            }, {
              fields: ['id', 'nombre', 'precio', 'descripcion', 'imagen']
            });

          case 4:
            newHamburguesa = _context2.sent;

            if (!newHamburguesa) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Hamburguesa created successfully',
              data: newHamburguesa
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
  return _createHamburguesa.apply(this, arguments);
}

;

function getOneHamburguesa(_x5, _x6) {
  return _getOneHamburguesa.apply(this, arguments);
}

function _getOneHamburguesa() {
  _getOneHamburguesa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, hamburguesa;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return Hamburguesa.findOne({
              where: {
                id: id
              }
            });

          case 3:
            hamburguesa = _context3.sent;
            res.json({
              data: hamburguesa
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneHamburguesa.apply(this, arguments);
}

function deleteHamburguesa(_x7, _x8) {
  return _deleteHamburguesa.apply(this, arguments);
}

function _deleteHamburguesa() {
  _deleteHamburguesa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return Hamburguesa.destroy({
              where: {
                id: id
              }
            });

          case 3:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Hamburguesa Deleted',
              count: deleteRowCount
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteHamburguesa.apply(this, arguments);
}

function updateHamburguesa(_x9, _x10) {
  return _updateHamburguesa.apply(this, arguments);
}

function _updateHamburguesa() {
  _updateHamburguesa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nombre, precio, descripcion, imagen, hamburguesas;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, precio = _req$body2.precio, descripcion = _req$body2.descripcion, imagen = _req$body2.imagen;
            _context6.next = 4;
            return Hamburguesa.findAll({
              attributes: ['id', 'nombre', 'precio', 'descripcion', 'imagen'],
              where: {
                id: id
              }
            });

          case 4:
            hamburguesas = _context6.sent;

            if (hamburguesas.length > 0) {
              hamburguesas.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(hamburguesa) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return hamburguesa.update({
                            nombre: nombre,
                            precio: precio,
                            descripcion: descripcion,
                            imagen: imagen
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'Project updated Successfully',
              data: hamburguesas
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updateHamburguesa.apply(this, arguments);
}