import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CartCard from "./CartCard";
import CartFooter from "./CartFooter";
import EmptyCart from "./EmptyCart";

function Cart({ cartData = [], setCartData, onCartRemove, calcPrice }) {
  React.useEffect(() => {
    axios
      .get("https://61f250832219930017f5047c.mockapi.io/secondo-market-cart")
      .then((res) => setCartData(res.data))
  }, [setCartData]);

  return (
		<aside className="cart">
      {cartData.length > 0 ? <aside className="cart"><h2 className="cart__title">Cart</h2>
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
      <CartFooter calcPrice={calcPrice} /></aside> : <EmptyCart />}
    </aside>
  );
}

Cart.propTypes = {
  cartData: PropTypes.array.isRequired,
  setCartData: PropTypes.func.isRequired,
};

export default Cart;
