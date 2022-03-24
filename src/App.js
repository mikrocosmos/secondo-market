import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Cart from "./components/Content/Cart/Cart";

function App() {
  const [cart, setCart] = useState(false);
  const [cartData, setCartData] = useState([]);

  const addToCart = (obj) => {
    setCartData((prev) => [...prev, obj]);
    axios.post(
      "https://61f250832219930017f5047c.mockapi.io/secondo-market-cart",
      obj
    );
  };

	const onRemove = (id) => {
    axios.delete(
      `https://61f250832219930017f5047c.mockapi.io/secondo-market-cart/${id}`
    );
		setCartData((prev => prev.filter((item) => item.id !== id)))
	}

  return (
    <div className="wrapper">
      <div className="overlay">
        {cart && <Cart cartData={cartData} setCartData={setCartData} onRemove={onRemove} />}
        <Header openCart={() => setCart(!cart)} />
        <Content addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
