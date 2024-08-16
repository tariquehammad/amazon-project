import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
// import { updateCartQuantity as updateCheckoutItems } from './amazon.js';
import { cart } from '../data/cart.js';

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

