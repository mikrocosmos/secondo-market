import React from "react";

import CartCard from "./CartCard";
import CartFooter from "./CartFooter";
import Info from "../Sidebar/Info";

import { AppContext } from "../../../App";
function Cart({ onCartRemove }) {
  const { cartData, cartLoaded, onOrder, isCompleted, orderID } =
    React.useContext(AppContext);

  return (
    <aside className="cart">
      {cartData.length > 0 ? (
        <aside className="cart">
          <h2 className="cart__title">Cart</h2>
          <section className="cart__items">
            {cartData.map((obj) => (
              <CartCard
                key={obj.id}
                id={obj.id}
                title={obj.title}
                imgURL={obj.imgURL}
                price={obj.price}
                quantity={obj.quantity}
                onCartRemove={onCartRemove}
              />
            ))}
          </section>
          <CartFooter />
          <button
            disabled={cartLoaded}
            className="cart__footer__btn"
            onClick={onOrder}
          >
            Check Out
            <img
              className="cart__footer__btn__icon"
              src="/img/svg/right-arrow.svg"
              alt="Check Out"
            />
          </button>
        </aside>
      ) : (
        <Info
          heading={
            isCompleted ? (
              <span style={{ color: "#87C20A" }}>Success!</span>
            ) : (
              "Cart is empty"
            )
          }
          text={
            isCompleted
              ? `Your order №${orderID} is ready to be shipped.`
              : "Please add some items in the cart to check out."
          }
          img={isCompleted ? "/img/success.png" : "/img/cart.png"}
        />
      )}
    </aside>
  );
}

export default Cart;
