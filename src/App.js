import React, { useState } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Cart from "./components/Content/Cart/Cart";

function App() {
  const [cart, setCart] = useState(false);
  const [cartData, setCartData] = useState([]);

	const addToCart = (obj) => {
		setCartData(prev => [...prev, obj])
	}

  return (
    <div className="wrapper">
      <div className="overlay">
        {cart && <Cart cartData={cartData} />}
        <Header openCart={() => setCart(!cart)} />
        <Content addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
