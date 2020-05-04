"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _hamburguesa = require("../controllers/hamburguesa.controller");

var router = (0, _express.Router)();
router.get('/', _hamburguesa.getHamburguesa);
router.post('/', _hamburguesa.createHamburguesa);
router["delete"]('/:id', _hamburguesa.deleteHamburguesa);
router.get('/:id', _hamburguesa.getOneHamburguesa);
router.patch('/:id', _hamburguesa.updateHamburguesa);
var _default = router;
exports["default"] = _default;