import React from "react";
import CartCard from "./CartCard";
import CartFooter from "./CartFooter";

function Cart({cartData = []}) {
  return (
    <aside className="cart">
      <h2 className="cart__title">Cart</h2>
      <section className="cart__items">

				{cartData.map((obj) => <CartCard title={obj.title} imgURL={obj.imgURL} price={obj.price} />)}
      </section>
      <CartFooter />
    </aside>
  );
}

export default Cart;
