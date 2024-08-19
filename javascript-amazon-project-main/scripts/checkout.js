import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { cart } from '../data/cart.js';
import '../data/cart-oop.js';



renderOrderSummary();
renderPaymentSummary();
updateCheckoutQuantity();



export function updateCheckoutQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.js-items-in-checkout').innerHTML = cartQuantity;
}

