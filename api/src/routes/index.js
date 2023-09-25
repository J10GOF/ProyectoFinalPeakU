const { Router } = require("express");
const countries = require("./countries");
const getCountries = require("./getCountries")

const router = Router();

router.use("/", countries);
router.use("/", getCountries)

module.exports = router;
