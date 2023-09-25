const { Router } = require("express");
const { Place } = require("../db");
const { Country } = require("../db");

const router = Router();


router.post("/lugar", async (req, res) => {
  try {
    const {
      name,
      price,
      discount,
      rating,
      distance,
      comments,
      image,
      country,
    } = req.body;

    // Comprueba si el país ya existe en la base de datos
    let existingCountry = await Country.findOne({ where: { name: country } });

    // Si el país no existe, créalo
    if (!existingCountry) {
      existingCountry = await Country.create({ name: country });
    }

    // Crea un nuevo lugar asociado al país
    const newPlace = await Place.create({
      name,
      price,
      discount,
      rating,
      distance,
      comments,
      image,
      countryId: existingCountry.id, // Asocia el lugar al país
    });

    const createdPlace = await Place.findByPk(newPlace.id, {
      include: Country,
    });
    // Devuelve una respuesta de éxito
    res
      .status(201)
      .json({ message: "Lugar creado exitosamente", place:createdPlace });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
