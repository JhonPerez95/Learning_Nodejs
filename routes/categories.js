const express = require("express");
const router = express.Router();
const ViewCategories = require("./../controllers/categories");

router.get("/categories/all", ViewCategories.getAllCategories);
router.get("/categories/all/:id", ViewCategories.getCategoryId);

module.exports = router;