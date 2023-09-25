const { Router } = require("express");
const countries = require("./countries");
const places = require('./places')
const getCountries = require("./getCountries")

const router = Router();

router.use("/", countries);
router.use("/", getCountries);
router.use("/", places);


module.exports = router;
