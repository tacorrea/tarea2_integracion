"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ingrediente = require("../controllers/ingrediente.controller");

var router = (0, _express.Router)();
// /api/projects/
router.get('/', _ingrediente.getIngrediente);
router.post('/', _ingrediente.createIngrediente);
router.get('/:id', _ingrediente.getOneIngrediente);
router["delete"]('/:id', _ingrediente.deleteIngrediente);
var _default = router;
exports["default"] = _default;