/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51LlfGOJqQLQIgy4ZnAGN8jYnypCDOPYiXWS0OQ7rMUGzjVvr6oORQhvoGk7U4lf1uk7frdgYv8ZyVvPuyEcPagA200w4D4y67s'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout sesiion from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/booking/checkout-session/${tourId}`
    );
    console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
