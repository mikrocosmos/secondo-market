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
  const [isCompleted, setIsCompleted] = useState(false);
  const [orderID, setOrderID] = useState(0);
  const [cartLoaded, setCartLoaded] = useState(false);
  const [orders, setOrders] = useState([]);
  const db = "https://61f250832219930017f5047c.mockapi.io/secondo-market";

  // Required to use with mockApi to not be banned with HTTP code 429
  const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

  async function onOrder() {
    try {
      setCartLoaded(true);
      const { data } = await axios.post(`${db}-orders`, {
        items: cartData,
      });
      setOrderID(data.id);
      setIsCompleted(true);
      setCartData([]);
      for (let i = 0; i < cartData.length; i++) {
        const item = cartData[i];
        await axios.delete(`${db}-cart/` + item.id);
        await delay();
      }
    } catch (error) {
      alert("Error: Cannot create an order.");
      console.error(error);
    } finally {
      setCartLoaded(false);
    }
  }

  async function addToCart(obj) {
    try {
      const findItem = cartData.find((cartObj) => cartObj.parentId === obj.id);
      if (findItem) {
        setCartData((prev) => prev.filter((item) => item.parentId !== obj.id));
        await axios.delete(`${db}-cart/${findItem.id}`);
      } else {
        const { data } = await axios.post(`${db}-cart`, obj);
        setCartData((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Error: cannot add to cart.");
      console.error(error);
    }
  }

  async function addToFavorite(obj) {
    try {
      if (favoriteData.find((favObj) => favObj.id === obj.id)) {
        onFavoriteRemove(obj.id);
      } else {
        const { data } = await axios.post(`${db}-favorite`, obj);
        setFavoriteData((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Error: cannot add to favorite.");
      console.error(error);
    }
  }

  const onCartRemove = (id) => {
    try {
      setCartData((prev) =>
        prev.filter((item) => String(item.id) !== String(id))
      );
      axios.delete(`${db}-cart/${id}`);
    } catch (error) {
      alert("Error: Cannot delete item from cart.");
      console.error(error);
    }
  };

  const onFavoriteRemove = (id) => {
    try {
      setFavoriteData((prev) => prev.filter((item) => item.id !== id));
      axios.delete(`${db}-favorite/${id}`);
    } catch (error) {
      alert("Error: Cannot delete item from favorite.");
      console.error(error);
    }
  };

  const ordersData = orders.map((obj) => obj.items).flat();

  const calcPrice = cartData.reduce((summary, obj) => obj.price + summary, 0);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoaded(true);
        const [cartResponse, favoriteResponse, mainResponse, ordersResponse] =
          await Promise.all([
            axios.get(`${db}-cart`),
            axios.get(`${db}-favorite`),
            axios.get(db),
            axios.get(`${db}-orders`),
          ]);

        setIsLoaded(false);
        setCartData(cartResponse.data);
        setFavoriteData(favoriteResponse.data);
        setSneakersData(mainResponse.data);
        setOrders(ordersResponse.data);
      } catch (error) {
        alert("Error: Cannot load database.");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const checkAdded = (id) => cartData.some((obj) => obj.parentId === id);
  const checkFavorite = (id) => favoriteData.some((obj) => obj.parentId === id);

  return (
    <AppContext.Provider
      value={{
        sneakersData,
        cartData,
        favoriteData,
        checkAdded,
        checkFavorite,
        setCartData,
        calcPrice,
        onOrder,
        cartLoaded,
        isCompleted,
        orders,
        orderID,
        addToCart,
        addToFavorite,
      }}
    >
      <div className="wrapper">
        {cart && <Cart onCartRemove={onCartRemove} />}
        <Header
          cart={cart}
          openCart={setCart}
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
          <Route
            path="/profile/orders"
            exact
            element={<Orders ordersData={ordersData} />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
