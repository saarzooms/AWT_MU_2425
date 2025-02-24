const express = require("express");
const shopController = require("../controllers/shop.controller");
const router = express.Router();

router.get("/", shopController.fetchAll);
router.post("/", shopController.create);
router.put("/:id", shopController.update);
router.delete("/:id", shopController.delete);
router.get("/:id", shopController.findOne);
module.exports = router;
