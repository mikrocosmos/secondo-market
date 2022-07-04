import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import CartCard from "./CartCard";
import CartFooter from "./CartFooter";
import Info from "../Sidebar/Info";

import { AppContext } from "../../../App";

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

function Cart({ onCartRemove, calcPrice }) {
  const { cartData, setCartData } = React.useContext(AppContext);
  const [isCompleted, setIsCompleted] = useState(false);
  const [orderID, setOrderID] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const onOrder = async () => {
    try {
      setIsLoaded(true);
      const { data } = await axios.post(
        "https://61f250832219930017f5047c.mockapi.io/secondo-market-orders",
        { items: cartData }
      );
      setOrderID(data.id);
      setIsCompleted(true);
      setCartData([]);
      for (let i = 0; i < cartData.length; i++) {
        const item = cartData[i];
        await axios.delete(
          "https://61f250832219930017f5047c.mockapi.io/secondo-market-cart/" +
            item.id
        );
				await delay();
      }
    } catch (error) {
      alert("Error: Cannot create an order.");
    } finally {
      setIsLoaded(false);
    }
  };

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
          <CartFooter calcPrice={calcPrice} />
          <button
            disabled={isLoaded}
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

Cart.propTypes = {
  cartData: PropTypes.array.isRequired,
  setCartData: PropTypes.func.isRequired,
};

export default Cart;
