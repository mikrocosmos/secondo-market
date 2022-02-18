import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CartCard from "./CartCard";
import CartFooter from "./CartFooter";
// import EmptyCart from "./EmptyCart";

function Cart({ cartData = [], setCartData, onRemove }) {
  React.useEffect(() => {
    axios
      .get("https://61f250832219930017f5047c.mockapi.io/secondo-market-cart")
      .then((res) => setCartData(res.data));
  }, [setCartData]);

  return (
		<aside className="cart">
      <h2 className="cart__title">Cart</h2>
      <section className="cart__items">
        {cartData.map((obj) => (
          <CartCard
            key={obj.id}
            title={obj.title}
            imgURL={obj.imgURL}
            price={obj.price}
            quantity={obj.quantity}
						onRemove={onRemove}
          />
        ))}
      </section>
      <CartFooter />
    </aside>
  );
}

Cart.propTypes = {
  cartData: PropTypes.array.isRequired,
  setCartData: PropTypes.func.isRequired,
};

export default Cart;
