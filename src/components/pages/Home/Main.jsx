import React, { useState } from "react";
import PropTypes from 'prop-types'
import axios from "axios";
import Card from './ItemCard'
import SlickSlider from '../../Slick/SlickSlider'

function Main({ addToCart, addToFavorite }) {
  const [sneakersData, setSneakersData] = useState([]);
  const [search, setSearch] = useState("");

  React.useEffect(() => {
    axios
      .get("https://61f250832219930017f5047c.mockapi.io/secondo-market")
      .then((res) => setSneakersData(res.data));
  }, []);

  const handleSearch = (event) => setSearch(event.target.value);

  return (
    <main className="content">
			<SlickSlider />
      <div className="content__header">
        <h1 className="content__title">
          {search ? `Searching for "${search}"` : "All sneakers"}
        </h1>
        <div className="content__search">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="content__search__image"
          >
            <path
              d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
              stroke="#e4e4e4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {search && (
            <img
              onClick={() => setSearch("")}
              className="content__search__clear"
              src="/img/svg/delete.svg"
              alt="Clear"
            />
          )}
          <input
            className="content__search__input"
            placeholder="Search..."
            value={search}
            maxLength={28}
            onChange={handleSearch}
          ></input>
        </div>
      </div>
      <section className="items">
        {sneakersData
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((e) => (
            <Card
              key={e.id}
							id={e.id}
              title={e.title}
              imgURL={e.imgURL}
              price={e.price}
							quantity={e.quantity}
              onAddClick={(obj) => addToCart(obj)}
              onFavoriteClick={(obj) => addToFavorite(obj)}
            />
          ))}
      </section>
    </main>
  );
}

Main.propTypes = {
	addToCart: PropTypes.func.isRequired
}

export default Main;
