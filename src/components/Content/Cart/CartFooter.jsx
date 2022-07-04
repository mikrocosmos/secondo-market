import React from "react";
import { AppContext } from "../../../App";

function CartFooter() {
  const { calcPrice } = React.useContext(AppContext);

  const calcTax = (price) => {
    const total = price * 0.18;
    return Math.floor(total * 100) / 100;
  };

  return (
    <div className="cart__footer">
      <ul className="cart__footer__price">
        <li className="cart__footer__text">
          <span>Total:</span>
          <div className="dash"></div>
          <span className="cart__footer__value">${calcPrice}</span>
        </li>
        <li className="cart__footer__text">
          <span>Including Tax 18%:</span>
          <div className="dash"></div>
          <span className="cart__footer__value">${calcTax(calcPrice)}</span>
        </li>
      </ul>
    </div>
  );
}

export default CartFooter;
