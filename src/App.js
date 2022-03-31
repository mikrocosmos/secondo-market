import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Cart from "./components/Content/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import Favorite from "./components/Content/Favorite/Favorite";
import Profile from "./components/Content/Profile/Profile";
import Orders from "./components/Content/Profile/Orders/Orders";

function App() {
  const [cart, setCart] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);

  const addToCart = (obj) => {
    setCartData((prev) => [...prev, obj]);
    axios.post(
      "https://61f250832219930017f5047c.mockapi.io/secondo-market-cart",
      obj
    );
  };

  const addToFavorite = (obj) => {
    setFavoriteData((prev) => [...prev, obj]);
    axios.post(
      "https://61f250832219930017f5047c.mockapi.io/secondo-market-favorite",
      obj
    );
  };

  const onCartRemove = (id) => {
    axios.delete(
      `https://61f250832219930017f5047c.mockapi.io/secondo-market-cart/${id}`
    );
    setCartData((prev) => prev.filter((item) => item.id !== id));
  };

  const onFavoriteRemove = (id) => {
    axios.delete(
      `https://61f250832219930017f5047c.mockapi.io/secondo-market-favorite/${id}`
    );
    setCartData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      {cart && (
        <Cart
          cartData={cartData}
          setCartData={setCartData}
          onCartRemove={onCartRemove}
        />
      )}
      <Header openCart={() => setCart(!cart)} />
      <Routes>
        <Route
          path="/"
          element={
            <Content addToCart={addToCart} addToFavorite={addToFavorite} />
          }
        />
        <Route
          path="/favorite"
          element={
            <Favorite
              favoriteData={favoriteData}
              setFavoriteData={setFavoriteData}
              onFavoriteRemove={onFavoriteRemove}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
