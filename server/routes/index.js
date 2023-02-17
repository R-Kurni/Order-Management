const router = require("express").Router();
const userRouter = require("./userRoutes");
const orderRouter = require("./orderRoutes");
const { authentication } = require("../middlewares/authentication");

router.use("/", userRouter);

router.use(authentication);

router.use("/orders", orderRouter);

module.exports = router;
