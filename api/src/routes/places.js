const { Router } = require("express");
const { Place } = require("../db");
const { Op } = require("sequelize");

const router = Router();

// Ruta POST para crear un lugar
router.post("/places", async (req, res) => {
  try {
    const {
      name,
      country,
      price,
      discount,
      rating,
      distance,
      comments,
      image,
    } = req.body;

    const newPlace = await Place.create({
      name,
      price,
      country,
      discount,
      rating,
      distance,
      comments,
      image,
    });

    res.status(201).json({
      message: "Lugar creado exitosamente",
      place: newPlace,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta GET para obtener una lista de lugares
router.get("/places", async (req, res) => {
  const name = req.query.name;
  try {
    let places;

    if (name) {
      places = await Place.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
    } else {
      places = await Place.findAll();
    }

    res.status(200).json(places);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
