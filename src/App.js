import React, { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Main from "./components/pages/Home/Main.jsx";
import Cart from "./components/Content/Cart/Cart.jsx";
import Favorite from "./components/pages/Favorite/Favorite.jsx";
import Profile from "./components/pages/Profile/Profile.jsx";
import Orders from "./components/pages/Profile/Orders/Orders.jsx";

export const AppContext = React.createContext({});

function App() {
  const [sneakersData, setSneakersData] = useState([]);
  const [cart, setCart] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);
  const db = "https://61f250832219930017f5047c.mockapi.io";

  async function addToCart(obj) {
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
  }

  async function addToFavorite(obj) {
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
  }

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

  React.useEffect(() => {
    async function fetchData() {
      setIsLoaded(true);
      const cartResponse = await axios.get(`${db}/secondo-market-cart`);
      const favoriteResponse = await axios.get(`${db}/secondo-market-favorite`);
      const mainResponse = await axios.get(`${db}/secondo-market`);

      setIsLoaded(false);
      setCartData(cartResponse.data);
      setFavoriteData(favoriteResponse.data);
      setSneakersData(mainResponse.data);
    }
    fetchData();
  }, []);

  const checkAdded = (id) => cartData.some((obj) => obj.id === id);

  return (
    <AppContext.Provider
      value={{
        sneakersData,
        cartData,
        favoriteData,
        checkAdded,
        setCartData,
      }}
    >
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
                sneakersData={sneakersData}
                cartData={cartData}
                addToCart={addToCart}
                addToFavorite={addToFavorite}
                isLoaded={isLoaded}
              />
            }
          />
          <Route
            path="/favorite"
            element={
              <Favorite
                setFavoriteData={setFavoriteData}
                onFavoriteRemove={onFavoriteRemove}
              />
            }
          />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/profile/orders" exact element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;