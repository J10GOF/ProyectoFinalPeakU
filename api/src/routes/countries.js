const { Router } = require("express");
const { Country } = require("../db");

const router = Router();

// Ruta POST para crear un país
router.get("/get", (req, res) => {
  console.log("Soy el get")
})
// router.post("/", async (req, res) => {
//   try {
//     const { name } = req.body;

//     const newCountry = await Country.create({
//       name,
//     });

//     res.status(201).json({
//       message: "País creado exitosamente",
//       country: newCountry,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// Ruta GET para obtener una lista de países
router.get("/", async (req, res) => {
  try {
    const countries = await Country.findAll();

    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
