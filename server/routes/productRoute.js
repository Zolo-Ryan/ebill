const express = require("express");
const router = express.Router();
const {protect, restrictTo} = require("../middleware/authMiddleware.js");
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController.js");
const { upload } = require("../utils/fileUpload.js");

router.post("/", protect,restrictTo(["ADMIN"]), upload.single("image"), createProduct);
router.patch("/:id", protect, upload.single("image"), updateProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProduct);
router.delete("/:id", protect,restrictTo(["ADMIN"]), deleteProduct);

module.exports = router;
