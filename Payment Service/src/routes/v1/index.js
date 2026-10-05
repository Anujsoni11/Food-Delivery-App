const express = require("express");
const { PaymentController } = require("../../controller");
const { PaymentMiddleware } = require("../../middleware/index");

const router = express.Router();

router.post("/payment", PaymentMiddleware.isAuthenticated, PaymentController.create);
router.delete("/payment/:id", PaymentMiddleware.isAuthenticated, PaymentController.destroy);
router.patch("/payment/:id", PaymentMiddleware.isAuthenticated, PaymentController.update);
router.get("/payment/:id", PaymentMiddleware.isAuthenticated, PaymentController.get);
router.get("/payments", PaymentMiddleware.isAuthenticated, PaymentController.getAll);

router.patch("/payment/:id/status", PaymentMiddleware.isAuthenticated, PaymentController.updateStatus);

module.exports = router;