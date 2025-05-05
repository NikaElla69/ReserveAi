const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// Criar reserva
router.post('/', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).send(reservation);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;