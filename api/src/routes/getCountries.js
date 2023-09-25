const { Router } = require("express");
const { Place } = require("../db");
const { Country } = require("../db");

const router = Router();

router.post("/place", async (req, res) => {
  try {
    const {
      name,
      countryId,
      price,
      discount,
      rating,
      distance,
      comments,
      image,
      country,
    } = req.body;

    const newPlace = await Place.create({
      name,
      countryId,
      price,
      discount,
      rating,
      distance,
      comments,
      image,
    });

    if (Array.isArray(country)) {
      for (const countryName of country) {
        const countries = await Country.findAll({
          where: { name: countryName },
        });
        await newPlace.addCountries(countries);
      }
    } else {
      const countries = await Country.findAll({
        where: { name: country },
      });
      await newPlace.addCountries(countries);
    }

    res
      .status(201)
      .json({ message: "Lugar creado exitosamente", place: newPlace });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
