import React from "react";
import CartCard from './CartCard'
import CartFooter from './CartFooter'

function Cart() {
  return (
    <aside className="cart">
      <h2 className="cart__title">Cart</h2>
      <section className="cart__items">
        <CartCard />
        <CartCard />
      </section>
				<CartFooter />
    </aside>
  );
}

export default Cart;
