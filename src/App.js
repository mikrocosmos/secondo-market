import React, { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Main from "./components/pages/Home/Main.jsx";
import Cart from "./components/Content/Cart/Cart.jsx";
import Favorite from "./components/pages/Favorite/Favorite.jsx";
import Profile from "./components/pages/Profile/Profile.jsx";
import Orders from "./components/pages/Profile/Orders/Orders.jsx";

function App() {
  const [cart, setCart] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const db = "https://61f250832219930017f5047c.mockapi.io";

  const addToCart = async (obj) => {
    try {
      if (cartData.find((cartObj) => String(cartObj.id) === String(obj.id))) {
        onCartRemove(obj.id);
      } else {
        const { data } = await axios.post(`${db}/secondo-market-cart`, obj);
        setCartData((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Error: cannot add to cart");
    }
  };

  const addToFavorite = async (obj) => {
    try {
      if (favoriteData.find((favObj) => favObj.id === obj.id)) {
        onFavoriteRemove(obj.id);
      } else {
        const { data } = await axios.post(`${db}/secondo-market-favorite`, obj);
        setFavoriteData((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Error: cannot add to favorite");
    }
  };

  const onCartRemove = (id) => {
    setCartData((prev) =>
      prev.filter((item) => String(item.id) !== String(id))
    );
    axios.delete(`${db}/secondo-market-cart/${id}`);
  };

  const onFavoriteRemove = (id) => {
    setFavoriteData((prev) => prev.filter((item) => item.id !== id));
    axios.delete(`${db}/secondo-market-favorite/${id}`);
  };

  const calcPrice = () => {
    console.log(cartData);
  };

  return (
    <div className="wrapper">
      {cart && (
        <Cart
          cartData={cartData}
          setCartData={setCartData}
          onCartRemove={onCartRemove}
          calcPrice={calcPrice}
        />
      )}
      <Header
        openCart={() => setCart(!cart)}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              cartData={cartData}
              addToCart={addToCart}
              addToFavorite={addToFavorite}
            />
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
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/profile/orders" exact element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;