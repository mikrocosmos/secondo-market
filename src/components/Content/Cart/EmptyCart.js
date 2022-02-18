import React from "react";
import CartFooter from './CartFooter'

function EmptyCart() {
  return (
    <div>
      <h2 className="cart__title">Cart</h2>
      <div className="emptycart">
        <img
          width={120}
          height={120}
          className="emptycart__image"
          src="/img/cart.png"
          alt="Your cart is empty :("
        />
        <h3 className="emptycart__title">Cart is empty</h3>
        <p className="emptycart__text">
          Please add some items in the cart to check out
        </p>
      </div>
      <CartFooter />
    </div>
  );
}

export default EmptyCart;
