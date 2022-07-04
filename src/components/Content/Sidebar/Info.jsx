import React from 'react';

function Info(props) {
 return (
	<div>
      <h2 className="cart__title">Cart</h2>
      <div className="emptycart">
        <img
          height={120}
          className="emptycart__image"
          src={props.img}
          alt={props.heading}
        />
        <h3 className="emptycart__title">{props.heading}</h3>
        <p className="emptycart__text">
          {props.text}
        </p>
      </div>
    </div>
 )
}

export default Info;