import React from "react";

function CartFooter(props) {
	// temporarily
	let totalPrice = 600;

  const calcTax = (price, percent) => {
    if (price > 0) {
      let $1Percent = price / 100;
      let total = $1Percent * percent;
      return Math.floor(total * 100) / 100;
    } else {
			return 0;
		}
  }

  return (
    <div className="cart__footer">
      <ul className="cart__footer__price">
        <li className="cart__footer__text">
          <span>Total:</span>
          <div className="dash"></div>
          <span className="cart__footer__value">${totalPrice}</span>
        </li>
        <li className="cart__footer__text">
          <span>Including Tax 18%:</span>
          <div className="dash"></div>
          <span className="cart__footer__value">${calcTax(totalPrice, 18)}</span>
        </li>
      </ul>
    </div>
  );
}

export default CartFooter;