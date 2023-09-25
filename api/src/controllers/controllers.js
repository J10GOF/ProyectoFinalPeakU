// const { Place } = require('../api/db');

// async function createPlace(req, res) {
//   try {
//     const { name, countryId, price, discount, rating, distance, comments, image } = req.body;

//     const newPlace = await Place.create({
//       name,
//       countryId,
//       price,
//       discount,
//       rating,
//       distance,
//       comments,
//       image,
//     });

//     res.status(201).json({
//       message: 'Lugar creado exitosamente',
//       place: newPlace,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }

// module.exports = {
//   createPlace,
// };
