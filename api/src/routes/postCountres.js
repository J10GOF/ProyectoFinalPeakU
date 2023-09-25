const { Router } = require("express");
const { Place, Country } = require("../db");

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
    country.map(async (el) => {
      let pais = await Country.findAll({
        where: { name: el },
      });
      await newPlace.addCountry(pais);
    });

    res
      .status(201)
      .json({ message: "Lugar creado exitosamente", place: newPlace });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
