const express = require("express");
const { PaymentController } = require("../../controller");

const router = express.Router();

router.post("/payment", PaymentController.create);
router.delete("/payment/:id", PaymentController.destroy);
router.patch("/payment/:id", PaymentController.update);
router.get("/payment/:id", PaymentController.get);
router.get("/payments", PaymentController.getAll);

router.patch("/payment/:id/status", PaymentController.updateStatus);

module.exports = router;