const Cart = require("../models/Cart");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");

const router = require("express").Router();

// CREATE CART
router.post("/create", verifyTokenAndAuthorization, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE CART
router.put("/update/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE CART
router.delete("/delete/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Your Cart has been deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const Cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(Cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const Carts = await Cart.find();
    res.status(200).json(Carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
