const router = require("express").Router();
const orderController = require("../controllers/orderController.js");

router.post("/", orderController.createOrder);
router.get("/", orderController.getOrders);

module.exports = router;
