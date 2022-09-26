const express = require('express');
const bookingController = require('../controllers/bookingController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.get('/checkout-session/:tourId', bookingController.getCheckoutSession);

router
  .route('/')
  .get(authController.restrictTo('admin'), bookingController.getAllBookings)
  .post(authController.restrictTo('admin'), bookingController.createBooking);
router
  .route('/:id')
  .get(bookingController.getBooking)
  .patch(authController.restrictTo('admin'), bookingController.updateBooking)
  .delete(authController.restrictTo('admin'), bookingController.deleteBooking);

module.exports = router;
